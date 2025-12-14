"use client";

import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 mb-4"
          >
            About Our Boutique
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-700"
          >
            Tradition, Quality, and Elegance in Every Saree
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-zinc-900">
              Our Story
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Welcome to our home-based saree boutique, where tradition meets modern elegance.
              We are a passionate family-run business dedicated to bringing you the finest
              collection of handpicked sarees from master weavers across India.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              What started as a love for traditional Indian textiles has grown into a curated
              collection of premium sarees. Each piece in our collection is carefully selected
              for its quality, craftsmanship, and timeless beauty.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              We believe in providing a personalized shopping experience, understanding your
              needs, and helping you find the perfect saree for every occasion - be it a
              wedding, festival, or everyday elegance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">Passion for Quality</h3>
                  <p className="text-zinc-700 text-sm">
                    Every saree is handpicked and inspected to ensure authentic quality and craftsmanship
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">Customer First</h3>
                  <p className="text-zinc-700 text-sm">
                    Personalized service and genuine care for your satisfaction
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">Authentic Products</h3>
                  <p className="text-zinc-700 text-sm">
                    Direct sourcing from traditional weavers ensures authenticity
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">Curated Collection</h3>
                  <p className="text-zinc-700 text-sm">
                    Carefully selected designs that blend tradition with contemporary style
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-50 rounded-lg p-8 md:p-12"
        >
          <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Home-Based Boutique</h3>
              <p className="text-zinc-600 text-sm">
                Personal attention and care with every order
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">100% Authentic</h3>
              <p className="text-zinc-600 text-sm">
                Real product images and genuine quality
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Easy WhatsApp Ordering</h3>
              <p className="text-zinc-600 text-sm">
                Simple ordering process with cash on delivery
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
