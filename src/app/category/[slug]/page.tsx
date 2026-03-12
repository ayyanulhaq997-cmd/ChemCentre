"use client";

import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductCard from "@/components/shop/ProductCard";
import Footer from "@/components/layout/Footer";

import { PRODUCTS } from "@/constants/products";

export default function CategoryPage() {
  const { slug } = useParams();
  
  const filteredProducts = PRODUCTS.filter(p => p.category === slug);
  const categoryName = slug ? (slug as string).replace(/-/g, ' ').toUpperCase() : "PRODUCTS";

  return (
    <div className="min-h-screen flex flex-col bg-[#000000]">
      <Header />

      <main className="flex-grow pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">

            <div className="lg:w-1/4">
              <Sidebar />
            </div>

            <div className="lg:w-3/4 flex flex-col gap-8">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-3xl font-black text-white">{categoryName}</h2>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-2">
                    Showing {filteredProducts.length} research chemicals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-gray-500 font-bold uppercase tracking-widest bg-[#111111] rounded-lg border border-white/5">
                        No products found in this category.
                    </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
