"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, MessageCircle, Package, Shirt, Sparkles } from "lucide-react";
import { Saree } from "@/types";
import SareeCard from "@/components/saree-card";

const mockSarees: Record<string, Saree> = {
  "1": {
    id: "1",
    name: "Royal Red Banarasi Silk Saree",
    price: 8500,
    fabric: "Banarasi",
    color: "Red",
    occasion: "Wedding",
    images: ["/sarees/saree-1.jpg", "/sarees/saree-1-detail.jpg"],
    featured: true,
    available: true,
    blousePiece: true,
    length: "6.3 meters",
    careInstructions: "Dry clean only. Store in a cool, dry place. Avoid direct sunlight.",
    description: "Elegant red Banarasi silk saree with intricate golden zari work. Perfect for weddings and special occasions. Features traditional motifs and fine craftsmanship.",
    createdAt: new Date(),
  },
  "2": {
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
    description: "Beautiful blue silk saree perfect for parties and evening events",
    createdAt: new Date(),
  },
  "3": {
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
    description: "Authentic Kanjivaram silk saree in rich green with traditional temple border",
    createdAt: new Date(),
  },
};

const relatedSarees: Saree[] = [
  mockSarees["2"],
  mockSarees["3"],
];

export default function SareeDetailPage() {
  const params = useParams();
  const sareeId = params.id as string;
  const saree = mockSarees[sareeId];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!saree) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">Saree not found</h1>
          <Link href="/sarees">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collection
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hi, I'm interested in ${saree.name} (SKU: #SR${saree.id.padStart(3, '0')}). Please share availability and delivery details.`;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/sarees">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collection
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100 mb-4">
              <Image
                src={saree.images[selectedImage] || "/placeholder-saree.jpg"}
                alt={saree.name}
                fill
                className="object-cover"
                priority
              />
              {!saree.available && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="secondary" className="text-white bg-zinc-900 text-lg px-4 py-2">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>

            {saree.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {saree.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg bg-zinc-100 border-2 transition-all ${
                      selectedImage === index
                        ? "border-amber-700"
                        : "border-transparent hover:border-zinc-300"
                    }`}
                  >
                    <Image src={image} alt={`${saree.name} ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              {saree.featured && (
                <Badge className="mb-3 bg-amber-600">Featured</Badge>
              )}
              <h1 className="font-serif text-4xl font-bold text-zinc-900 mb-4">
                {saree.name}
              </h1>
              <p className="text-sm text-zinc-600 mb-4">SKU: #SR{saree.id.padStart(3, '0')}</p>
              <p className="text-3xl font-bold text-zinc-900">
                ₹{saree.price.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shirt className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-zinc-600">Fabric</p>
                  <p className="font-medium text-zinc-900">{saree.fabric}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-zinc-600">Occasion</p>
                  <p className="font-medium text-zinc-900">{saree.occasion}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Package className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-zinc-600">Length</p>
                  <p className="font-medium text-zinc-900">{saree.length}</p>
                </div>
              </div>
            </div>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900 mb-1">
                      {saree.blousePiece ? "With Blouse Piece" : "Without Blouse Piece"}
                    </p>
                    <p className="text-sm text-zinc-600">
                      {saree.blousePiece
                        ? "Includes unstitched blouse piece"
                        : "Saree only, blouse piece not included"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="font-semibold text-zinc-900 mb-2">Description</h3>
              <p className="text-zinc-700 leading-relaxed">{saree.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900 mb-2">Care Instructions</h3>
              <p className="text-zinc-700 leading-relaxed">{saree.careInstructions}</p>
            </div>

            <div className="space-y-3 pt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={!saree.available}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {saree.available ? "Order on WhatsApp" : "Out of Stock"}
                </Button>
              </a>
              {!saree.available && (
                <p className="text-sm text-center text-zinc-600">
                  Contact us on WhatsApp to check when this will be back in stock
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {relatedSarees.length > 0 && (
          <section className="py-12 border-t border-zinc-200">
            <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-8">
              Similar Sarees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSarees.map((relatedSaree, index) => (
                <motion.div
                  key={relatedSaree.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SareeCard saree={relatedSaree} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
