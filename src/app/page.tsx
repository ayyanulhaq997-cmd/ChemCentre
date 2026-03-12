import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductCard from "@/components/shop/ProductCard";
import { ArrowRight, ChevronRight } from "lucide-react";

const products = [
  { id: 1, name: "3-CMC ICE BIG CRYSTALS", price: 24.99, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/3-cmc-ice-big-crystals.jpg", slug: "3-cmc-ice-big-crystals", isBestseller: true },
  { id: 2, name: "4-CMC BOULDER QUALITY", price: 29.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/4-cmc-boulder.jpg", slug: "4-cmc-boulder", isNew: true },
  { id: 3, name: "PENTEDRONE SPARK ORIGINAL", price: 32.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/pentedrone.jpg", slug: "pentedrone-spark" },
  { id: 4, name: "CLONAZOLAM 0.5MG PILLS", price: 15.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/clonazolam.jpg", slug: "clonazolam-pills" },
  { id: 5, name: "NEP CRYSTAL PREMIUM", price: 22.99, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/nep-crystal.jpg", slug: "nep-crystal", isBestseller: true },
  { id: 6, name: "BROMAZOLAM PINK PELLET", price: 18.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/bromazolam.jpg", slug: "bromazolam" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[#F9FAFB]">
        {/* Banner Section */}
        <div className="bg-[#222222] text-white py-12 mb-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                  <div className="w-8 h-[2px] bg-gray-600" />
                  Premium Laboratory Source
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                  Highest Purity <span className="text-gray-400">Research Chemicals.</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg">
                  Europe&apos;s most trusted shop for high-quality analytical compounds.
                  Secure shipping and 100% lab-verified products.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-[#222222] px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-gray-100 transition-all">
                    Browse All Chemicals
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="hidden lg:block relative w-96 h-96">
                {/* Decorative Element */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-white/5 rounded-full animate-spin-slow rotate-45" />
                  <div className="absolute w-48 h-48 border-2 border-white/10 rounded-full animate-reverse-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Column */}
            <div className="lg:w-1/4">
              <Sidebar />
            </div>

            {/* Product Column */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-black">Featured Products</h2>
                  <p className="text-gray-400 text-sm font-medium">Updated 1 hour ago &bull; In Stock</p>
                </div>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-gray-500 transition-colors">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Pagination Mockup */}
              <div className="mt-16 flex justify-center gap-2">
                <button className="w-12 h-12 bg-[#222222] text-white rounded-xl font-bold">1</button>
                <button className="w-12 h-12 bg-white border border-gray-100 rounded-xl font-bold hover:bg-gray-50">2</button>
                <button className="w-12 h-12 bg-white border border-gray-100 rounded-xl font-bold hover:bg-gray-50">3</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Simple */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm font-medium">
            &copy; 2026 CHEM CENTRUM. All rights reserved.
            Research Use Only &bull; Laboratory Grade Compounds.
          </p>
        </div>
      </footer>
    </div>
  );
}
