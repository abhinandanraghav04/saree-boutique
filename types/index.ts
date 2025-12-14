export interface Saree {
  id: string;
  name: string;
  price: number;
  fabric: string;
  color: string;
  occasion: string;
  images: string[];
  featured: boolean;
  available: boolean;
  blousePiece: boolean;
  length: string;
  careInstructions: string;
  description?: string;
  createdAt: Date;
}

export type FabricType = 
  | "Silk" 
  | "Cotton" 
  | "Georgette" 
  | "Banarasi" 
  | "Chiffon" 
  | "Kanjivaram" 
  | "Chanderi"
  | "Other";

export type OccasionType = 
  | "Wedding" 
  | "Party" 
  | "Daily" 
  | "Festive" 
  | "Casual" 
  | "Formal";

export interface FilterState {
  priceRange: [number, number];
  fabrics: FabricType[];
  occasions: OccasionType[];
  colors: string[];
  availability: "all" | "in-stock" | "out-of-stock";
}

export interface Admin {
  uid: string;
  email: string;
  role: "admin";
}
