"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SareeCard from "@/components/saree-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, Search } from "lucide-react";
import { Saree, FabricType, OccasionType } from "@/types";

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
  {
    id: "4",
    name: "Pastel Pink Cotton Saree",
    price: 3200,
    fabric: "Cotton",
    color: "Pink",
    occasion: "Daily",
    images: ["/sarees/saree-4.jpg"],
    featured: false,
    available: true,
    blousePiece: true,
    length: "5.5 meters",
    careInstructions: "Machine washable",
    description: "Comfortable cotton saree for daily wear",
    createdAt: new Date(),
  },
  {
    id: "5",
    name: "Golden Georgette Party Saree",
    price: 4500,
    fabric: "Georgette",
    color: "Gold",
    occasion: "Party",
    images: ["/sarees/saree-5.jpg"],
    featured: false,
    available: true,
    blousePiece: true,
    length: "5.5 meters",
    careInstructions: "Dry clean only",
    description: "Shimmering georgette saree with sequin work",
    createdAt: new Date(),
  },
  {
    id: "6",
    name: "Purple Chiffon Designer Saree",
    price: 5800,
    fabric: "Chiffon",
    color: "Purple",
    occasion: "Festive",
    images: ["/sarees/saree-6.jpg"],
    featured: false,
    available: false,
    blousePiece: true,
    length: "5.5 meters",
    careInstructions: "Dry clean only",
    description: "Designer chiffon saree with modern prints",
    createdAt: new Date(),
  },
];

const fabrics: FabricType[] = ["Silk", "Cotton", "Georgette", "Banarasi", "Chiffon", "Kanjivaram", "Chanderi"];
const occasions: OccasionType[] = ["Wedding", "Party", "Daily", "Festive", "Casual", "Formal"];

export default function SareesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);
  const [availabilityFilter, setAvailabilityFilter] = useState<"all" | "in-stock" | "out-of-stock">("all");

  const toggleFabric = (fabric: string) => {
    setSelectedFabrics(prev =>
      prev.includes(fabric) ? prev.filter(f => f !== fabric) : [...prev, fabric]
    );
  };

  const toggleOccasion = (occasion: string) => {
    setSelectedOccasions(prev =>
      prev.includes(occasion) ? prev.filter(o => o !== occasion) : [...prev, occasion]
    );
  };

  const clearFilters = () => {
    setSelectedFabrics([]);
    setSelectedOccasions([]);
    setPriceRange([0, 20000]);
    setSearchQuery("");
    setAvailabilityFilter("all");
  };

  const filteredSarees = mockSarees.filter(saree => {
    const matchesSearch = saree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      saree.fabric.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFabric = selectedFabrics.length === 0 || selectedFabrics.includes(saree.fabric);
    const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(saree.occasion);
    const matchesPrice = saree.price >= priceRange[0] && saree.price <= priceRange[1];
    const matchesAvailability = availabilityFilter === "all" ||
      (availabilityFilter === "in-stock" && saree.available) ||
      (availabilityFilter === "out-of-stock" && !saree.available);

    return matchesSearch && matchesFabric && matchesOccasion && matchesPrice && matchesAvailability;
  });

  const activeFiltersCount = selectedFabrics.length + selectedOccasions.length +
    (availabilityFilter !== "all" ? 1 : 0);

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 mb-4"
          >
            Our Saree Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-700"
          >
            Discover {filteredSarees.length} beautiful sarees
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </Button>
          </div>

          <aside className={`lg:block ${showFilters ? "block" : "hidden"} lg:w-64 flex-shrink-0`}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Filters</CardTitle>
                  {activeFiltersCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-amber-700"
                    >
                      Clear all
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-zinc-900 mb-2 block">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <Input
                      placeholder="Search sarees..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-900 mb-2 block">
                    Availability
                  </label>
                  <div className="space-y-2">
                    {["all", "in-stock", "out-of-stock"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          checked={availabilityFilter === option}
                          onChange={() => setAvailabilityFilter(option as "all" | "in-stock" | "out-of-stock")}
                          className="w-4 h-4 text-amber-700"
                        />
                        <span className="text-sm text-zinc-700 capitalize">
                          {option.replace("-", " ")}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-900 mb-2 block">
                    Fabric Type
                  </label>
                  <div className="space-y-2">
                    {fabrics.map((fabric) => (
                      <label key={fabric} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFabrics.includes(fabric)}
                          onChange={() => toggleFabric(fabric)}
                          className="w-4 h-4 text-amber-700 rounded"
                        />
                        <span className="text-sm text-zinc-700">{fabric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-900 mb-2 block">
                    Occasion
                  </label>
                  <div className="space-y-2">
                    {occasions.map((occasion) => (
                      <label key={occasion} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedOccasions.includes(occasion)}
                          onChange={() => toggleOccasion(occasion)}
                          className="w-4 h-4 text-amber-700 rounded"
                        />
                        <span className="text-sm text-zinc-700">{occasion}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-900 mb-2 block">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <p className="text-sm text-zinc-600">
                      Up to ₹{priceRange[1].toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            {filteredSarees.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-zinc-600 mb-4">No sarees found</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSarees.map((saree, index) => (
                  <motion.div
                    key={saree.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <SareeCard saree={saree} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
