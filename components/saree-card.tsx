"use client";

import { Saree } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

interface SareeCardProps {
  saree: Saree;
}

export default function SareeCard({ saree }: SareeCardProps) {
  return (
    <Link href={`/sarees/${saree.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100">
          <Image
            src={saree.images[0] || "/placeholder-saree.jpg"}
            alt={saree.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {!saree.available && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary" className="text-white bg-zinc-900">
                Out of Stock
              </Badge>
            </div>
          )}
          {saree.featured && (
            <Badge className="absolute top-3 right-3 bg-amber-600 hover:bg-amber-700">
              Featured
            </Badge>
          )}
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="font-medium text-zinc-900 group-hover:text-amber-700 transition-colors line-clamp-1">
            {saree.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-zinc-900">
              ₹{saree.price.toLocaleString("en-IN")}
            </p>
            <span className="text-sm text-zinc-600 bg-zinc-100 px-2 py-1 rounded">
              {saree.fabric}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
