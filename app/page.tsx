"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SareeCard from "@/components/saree-card";
import { Saree } from "@/types";

const featuredSarees: Saree[] = [
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-amber-50 via-zinc-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-bold text-zinc-900 mb-6"
            >
              Handpicked Sarees for Every Occasion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-700 mb-8"
            >
              Discover our curated collection of premium silk, cotton, and designer sarees.
              Traditional elegance meets modern style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/sarees">
                <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                  Browse Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  Order on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <ShoppingBag className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                Curated Collection
              </h3>
              <p className="text-zinc-600">
                Handpicked sarees from the finest weavers across India
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Star className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-zinc-600">
                Authentic fabrics with traditional craftsmanship
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Truck className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                Easy Ordering
              </h3>
              <p className="text-zinc-600">
                Order directly via WhatsApp with cash on delivery
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Featured Sarees
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Explore our handpicked selection of the finest sarees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSarees.map((saree, index) => (
              <motion.div
                key={saree.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SareeCard saree={saree} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/sarees">
              <Button size="lg" variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                View All Sarees
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-4xl font-bold text-zinc-900 mb-6">
                Why Choose Our Boutique?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3"></span>
                  <span className="text-zinc-700">
                    Home-based boutique with personalized service
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3"></span>
                  <span className="text-zinc-700">
                    Authentic sarees directly from master weavers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3"></span>
                  <span className="text-zinc-700">
                    Cash on delivery and easy WhatsApp ordering
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3"></span>
                  <span className="text-zinc-700">
                    Real product images - what you see is what you get
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
                Ready to Order?
              </h3>
              <p className="text-zinc-600 mb-6">
                Connect with us on WhatsApp for instant assistance and easy ordering.
              </p>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}?text=Hi, I'm interested in browsing your saree collection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
