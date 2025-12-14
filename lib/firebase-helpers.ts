import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  DocumentData
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "@/config/firebase";
import { Saree } from "@/types";

const SAREES_COLLECTION = "sarees";

export async function getAllSarees(): Promise<Saree[]> {
  try {
    const sareesRef = collection(db, SAREES_COLLECTION);
    const q = query(sareesRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    })) as Saree[];
  } catch (error) {
    console.error("Error fetching sarees:", error);
    return [];
  }
}

export async function getFeaturedSarees(): Promise<Saree[]> {
  try {
    const sareesRef = collection(db, SAREES_COLLECTION);
    const q = query(
      sareesRef,
      where("featured", "==", true),
      where("available", "==", true),
      limit(6)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    })) as Saree[];
  } catch (error) {
    console.error("Error fetching featured sarees:", error);
    return [];
  }
}

export async function getSareeById(id: string): Promise<Saree | null> {
  try {
    const sareeRef = doc(db, SAREES_COLLECTION, id);
    const sareeDoc = await getDoc(sareeRef);
    
    if (sareeDoc.exists()) {
      return {
        id: sareeDoc.id,
        ...sareeDoc.data(),
        createdAt: sareeDoc.data().createdAt?.toDate() || new Date(),
      } as Saree;
    }
    return null;
  } catch (error) {
    console.error("Error fetching saree:", error);
    return null;
  }
}

export async function addSaree(saree: Omit<Saree, "id">): Promise<string | null> {
  try {
    const sareesRef = collection(db, SAREES_COLLECTION);
    const docRef = await addDoc(sareesRef, {
      ...saree,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding saree:", error);
    return null;
  }
}

export async function updateSaree(id: string, updates: Partial<Saree>): Promise<boolean> {
  try {
    const sareeRef = doc(db, SAREES_COLLECTION, id);
    await updateDoc(sareeRef, updates as DocumentData);
    return true;
  } catch (error) {
    console.error("Error updating saree:", error);
    return false;
  }
}

export async function deleteSaree(id: string): Promise<boolean> {
  try {
    const sareeRef = doc(db, SAREES_COLLECTION, id);
    await deleteDoc(sareeRef);
    return true;
  } catch (error) {
    console.error("Error deleting saree:", error);
    return false;
  }
}

export async function uploadSareeImage(
  file: File,
  sareeId: string,
  index: number
): Promise<string | null> {
  try {
    const fileName = `${sareeId}_${index}_${Date.now()}.${file.name.split(".").pop()}`;
    const storageRef = ref(storage, `sarees/${fileName}`);
    
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}

export async function deleteSareeImage(imageUrl: string): Promise<boolean> {
  try {
    const storageRef = ref(storage, imageUrl);
    await deleteObject(storageRef);
    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
}

export async function searchSarees(searchTerm: string): Promise<Saree[]> {
  try {
    const sareesRef = collection(db, SAREES_COLLECTION);
    const querySnapshot = await getDocs(sareesRef);
    
    const searchLower = searchTerm.toLowerCase();
    
    const allDocs = querySnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
      })) as Saree[];
    
    return allDocs.filter(saree => 
      saree.name.toLowerCase().includes(searchLower) ||
      saree.fabric.toLowerCase().includes(searchLower) ||
      saree.color.toLowerCase().includes(searchLower) ||
      saree.occasion.toLowerCase().includes(searchLower)
    );
  } catch (error) {
    console.error("Error searching sarees:", error);
    return [];
  }
}

export async function filterSarees(filters: {
  fabrics?: string[];
  occasions?: string[];
  priceRange?: [number, number];
  availability?: "all" | "in-stock" | "out-of-stock";
}): Promise<Saree[]> {
  try {
    const sareesRef = collection(db, SAREES_COLLECTION);
    let q = query(sareesRef);

    if (filters.availability === "in-stock") {
      q = query(q, where("available", "==", true));
    } else if (filters.availability === "out-of-stock") {
      q = query(q, where("available", "==", false));
    }

    const querySnapshot = await getDocs(q);
    
    let results = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    })) as Saree[];

    if (filters.fabrics && filters.fabrics.length > 0) {
      results = results.filter(saree => filters.fabrics!.includes(saree.fabric));
    }

    if (filters.occasions && filters.occasions.length > 0) {
      results = results.filter(saree => filters.occasions!.includes(saree.occasion));
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      results = results.filter(saree => saree.price >= min && saree.price <= max);
    }

    return results;
  } catch (error) {
    console.error("Error filtering sarees:", error);
    return [];
  }
}
