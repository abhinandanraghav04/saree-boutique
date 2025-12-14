"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}?text=${encodeURIComponent("Hi, I'd like to know more about your saree collection.")}`;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-700"
          >
            We&apos;re here to help you find the perfect saree
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-zinc-700 mb-6">
                Have questions about our sarees or need help with an order? We&apos;re just a
                message away! Contact us through WhatsApp for instant responses.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Phone</h3>
                      <p className="text-zinc-600">+91 98765 43210</p>
                      <p className="text-sm text-zinc-500 mt-1">Mon-Sat, 10 AM - 7 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Email</h3>
                      <p className="text-zinc-600">info@sareeboutique.com</p>
                      <p className="text-sm text-zinc-500 mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Location</h3>
                      <p className="text-zinc-600">
                        123 Main Street<br />
                        Bangalore, Karnataka 560001<br />
                        India
                      </p>
                      <p className="text-sm text-amber-700 mt-2 font-medium">
                        Visit by appointment only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Business Hours</h3>
                      <div className="text-zinc-600 space-y-1">
                        <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden h-full">
              <div className="relative w-full h-96 lg:h-full min-h-[400px] bg-zinc-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saree Boutique Location"
                ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-amber-50 rounded-lg p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-4">
              Ready to Order?
            </h2>
            <p className="text-zinc-700 mb-6">
              Browse our collection and order directly through WhatsApp. We offer cash on
              delivery and personalized assistance for all your queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sarees">
                <Button size="lg" variant="outline" className="border-amber-700 text-amber-700">
                  Browse Sarees
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
