"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Search,
  Plus
} from "lucide-react";
import { Saree } from "@/types";

const mockSarees: Saree[] = [
  {
    id: "1",
    name: "Royal Red Banarasi Silk Saree",
    price: 8500,
    fabric: "Banarasi",
    color: "Red",
    occasion: "Wedding",
    images: ["/sarees/saree-1.jpg"],
    featured: true,
    available: true,
    blousePiece: true,
    length: "6.3 meters",
    careInstructions: "Dry clean only",
    description: "Elegant red Banarasi silk saree with intricate golden zari work",
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Elegant Blue Silk Saree",
    price: 6200,
    fabric: "Silk",
    color: "Blue",
    occasion: "Party",
    images: ["/sarees/saree-2.jpg"],
    featured: true,
    available: true,
    blousePiece: true,
    length: "5.5 meters",
    careInstructions: "Dry clean only",
    description: "Beautiful blue silk saree perfect for parties",
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "Traditional Green Kanjivaram",
    price: 12000,
    fabric: "Kanjivaram",
    color: "Green",
    occasion: "Wedding",
    images: ["/sarees/saree-3.jpg"],
    featured: true,
    available: true,
    blousePiece: true,
    length: "6.3 meters",
    careInstructions: "Dry clean only",
    description: "Authentic Kanjivaram silk saree in rich green",
    createdAt: new Date(),
  },
];

export default function AdminSareesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sarees] = useState<Saree[]>(mockSarees);

  const filteredSarees = sarees.filter(saree =>
    saree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    saree.fabric.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this saree?")) {
      // TODO: Implement delete functionality
      console.log("Delete saree:", id);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="font-serif text-2xl font-bold text-zinc-900">
                  Manage Sarees
                </h1>
                <p className="text-sm text-zinc-600">
                  {filteredSarees.length} sarees in collection
                </p>
              </div>
            </div>
            <Link href="/admin/sarees/new">
              <Button className="bg-amber-700 hover:bg-amber-800">
                <Plus className="mr-2 h-4 w-4" />
                Add New Saree
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <Input
              placeholder="Search sarees by name or fabric..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </motion.div>

        {filteredSarees.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <p className="text-zinc-600 mb-4">No sarees found</p>
              <Link href="/admin/sarees/new">
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Saree
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredSarees.map((saree, index) => (
              <motion.div
                key={saree.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-40 aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={saree.images[0] || "/placeholder-saree.jpg"}
                          alt={saree.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="font-semibold text-lg text-zinc-900 mb-1">
                              {saree.name}
                            </h3>
                            <p className="text-sm text-zinc-600">
                              SKU: #SR{saree.id.padStart(3, '0')}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Link href={`/admin/sarees/edit/${saree.id}`}>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(saree.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{saree.fabric}</Badge>
                          <Badge variant="secondary">{saree.occasion}</Badge>
                          <Badge variant={saree.available ? "default" : "secondary"}>
                            {saree.available ? "In Stock" : "Out of Stock"}
                          </Badge>
                          {saree.featured && (
                            <Badge className="bg-amber-600">Featured</Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-zinc-600">Price</p>
                            <p className="font-semibold text-zinc-900">
                              ₹{saree.price.toLocaleString("en-IN")}
                            </p>
                          </div>
                          <div>
                            <p className="text-zinc-600">Color</p>
                            <p className="font-semibold text-zinc-900">{saree.color}</p>
                          </div>
                          <div>
                            <p className="text-zinc-600">Length</p>
                            <p className="font-semibold text-zinc-900">{saree.length}</p>
                          </div>
                          <div>
                            <p className="text-zinc-600">Blouse Piece</p>
                            <p className="font-semibold text-zinc-900">
                              {saree.blousePiece ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
