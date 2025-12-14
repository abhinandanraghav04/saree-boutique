"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, X } from "lucide-react";
import { FabricType, OccasionType } from "@/types";

const fabrics: FabricType[] = ["Silk", "Cotton", "Georgette", "Banarasi", "Chiffon", "Kanjivaram", "Chanderi", "Other"];
const occasions: OccasionType[] = ["Wedding", "Party", "Daily", "Festive", "Casual", "Formal"];

export default function NewSareePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    fabric: "Silk",
    color: "",
    occasion: "Wedding",
    length: "5.5 meters",
    blousePiece: true,
    featured: false,
    available: true,
    careInstructions: "Dry clean only",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length + images.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    setImages(prev => [...prev, ...files]);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Implement Firebase upload
      // 1. Upload images to Firebase Storage
      // 2. Create saree document in Firestore with image URLs
      
      console.log("Form data:", formData);
      console.log("Images:", images);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      alert("Saree added successfully!");
      router.push("/admin/sarees");
    } catch (error) {
      console.error("Error adding saree:", error);
      alert("Failed to add saree. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/admin/sarees">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-serif text-2xl font-bold text-zinc-900">
                Add New Saree
              </h1>
              <p className="text-sm text-zinc-600">Fill in the details below</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                    Saree Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Royal Red Banarasi Silk Saree"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-zinc-700 mb-2">
                      Price (₹) *
                    </label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="8500"
                      min="0"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="color" className="block text-sm font-medium text-zinc-700 mb-2">
                      Color *
                    </label>
                    <Input
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      placeholder="e.g., Red, Blue, Green"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fabric" className="block text-sm font-medium text-zinc-700 mb-2">
                      Fabric *
                    </label>
                    <select
                      id="fabric"
                      name="fabric"
                      value={formData.fabric}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm"
                      required
                    >
                      {fabrics.map(fabric => (
                        <option key={fabric} value={fabric}>{fabric}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-zinc-700 mb-2">
                      Occasion *
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm"
                      required
                    >
                      {occasions.map(occasion => (
                        <option key={occasion} value={occasion}>{occasion}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="length" className="block text-sm font-medium text-zinc-700 mb-2">
                    Length
                  </label>
                  <Input
                    id="length"
                    name="length"
                    value={formData.length}
                    onChange={handleInputChange}
                    placeholder="5.5 meters"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Images</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Upload Images (Max 5)
                  </label>
                  <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-zinc-400 mb-4" />
                    <div className="space-y-2">
                      <label htmlFor="images" className="cursor-pointer">
                        <span className="text-amber-700 hover:text-amber-800 font-medium">
                          Click to upload
                        </span>
                        <span className="text-zinc-600"> or drag and drop</span>
                      </label>
                      <p className="text-xs text-zinc-500">PNG, JPG, WEBP up to 10MB</p>
                    </div>
                    <input
                      id="images"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <div className="relative w-full aspect-square">
                          <Image
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-zinc-700 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="flex w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm"
                    placeholder="Elegant red Banarasi silk saree with intricate golden zari work..."
                  />
                </div>

                <div>
                  <label htmlFor="careInstructions" className="block text-sm font-medium text-zinc-700 mb-2">
                    Care Instructions
                  </label>
                  <textarea
                    id="careInstructions"
                    name="careInstructions"
                    value={formData.careInstructions}
                    onChange={handleInputChange}
                    rows={2}
                    className="flex w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm"
                    placeholder="Dry clean only. Store in a cool, dry place."
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="blousePiece"
                      checked={formData.blousePiece}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-amber-700 rounded"
                    />
                    <span className="text-sm font-medium text-zinc-700">
                      Includes Blouse Piece
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-amber-700 rounded"
                    />
                    <span className="text-sm font-medium text-zinc-700">
                      Featured Saree
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="available"
                      checked={formData.available}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-amber-700 rounded"
                    />
                    <span className="text-sm font-medium text-zinc-700">
                      Available for Sale
                    </span>
                  </label>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-end space-x-4">
              <Link href="/admin/sarees">
                <Button type="button" variant="outline" disabled={loading}>
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800"
                disabled={loading}
              >
                {loading ? "Adding Saree..." : "Add Saree"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
