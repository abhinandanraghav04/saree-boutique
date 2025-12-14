"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Package, 
  ShoppingBag, 
  AlertCircle, 
  TrendingUp,
  Plus,
  LogOut
} from "lucide-react";

export default function AdminDashboardPage() {
  const stats = {
    totalSarees: 24,
    activeSarees: 20,
    outOfStock: 4,
    monthlyInquiries: 45,
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-2xl font-bold text-zinc-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-zinc-600">Saree Boutique Management</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline">
                  View Store
                </Button>
              </Link>
              <Link href="/admin/login">
                <Button variant="ghost">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-1">
                Welcome Back!
              </h2>
              <p className="text-zinc-600">
                Here&apos;s what&apos;s happening with your boutique today.
              </p>
            </div>
            <Link href="/admin/sarees/new">
              <Button className="bg-amber-700 hover:bg-amber-800">
                <Plus className="mr-2 h-4 w-4" />
                Add New Saree
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-600">
                  Total Sarees
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-amber-700" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-900">
                  {stats.totalSarees}
                </div>
                <p className="text-xs text-zinc-600 mt-1">
                  Listed in collection
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-600">
                  Active Sarees
                </CardTitle>
                <Package className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-900">
                  {stats.activeSarees}
                </div>
                <p className="text-xs text-zinc-600 mt-1">
                  Available for sale
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-600">
                  Out of Stock
                </CardTitle>
                <AlertCircle className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-900">
                  {stats.outOfStock}
                </div>
                <p className="text-xs text-zinc-600 mt-1">
                  Need restocking
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-600">
                  Monthly Inquiries
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-900">
                  {stats.monthlyInquiries}
                </div>
                <p className="text-xs text-zinc-600 mt-1">
                  WhatsApp clicks this month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/admin/sarees" className="block">
                  <Button variant="outline" className="w-full justify-start h-auto py-4">
                    <div className="text-left">
                      <div className="font-semibold">Manage Sarees</div>
                      <div className="text-xs text-zinc-600 mt-1">
                        View, edit, or delete sarees
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link href="/admin/sarees/new" className="block">
                  <Button variant="outline" className="w-full justify-start h-auto py-4">
                    <div className="text-left">
                      <div className="font-semibold">Add New Saree</div>
                      <div className="text-xs text-zinc-600 mt-1">
                        Upload images and details
                      </div>
                    </div>
                  </Button>
                </Link>

                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full justify-start h-auto py-4">
                    <div className="text-left">
                      <div className="font-semibold">Customer Messages</div>
                      <div className="text-xs text-zinc-600 mt-1">
                        Check WhatsApp inquiries
                      </div>
                    </div>
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
