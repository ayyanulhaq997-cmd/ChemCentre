"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductCard from "@/components/shop/ProductCard";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { ShieldCheck, Truck, Coins, Package } from "lucide-react";

const products = [
  { id: 1, name: "3-CMC ICE BIG CRYSTALS", price: 24.99, image: "/images/crystals-ice.png", slug: "3-cmc-ice-big-crystals", isBestseller: true },
  { id: 2, name: "4-CMC BOULDER QUALITY", price: 29.50, image: "/images/crystals-white.png", slug: "4-cmc-boulder", isNew: true },
  { id: 3, name: "PENTEDRONE SPARK ORIGINAL", price: 32.00, image: "/images/crystals-white.png", slug: "pentedrone-spark" },
  { id: 4, name: "CLONAZOLAM 0.5MG PILLS", price: 15.00, image: "/images/pills-pink.png", slug: "clonazolam-pills" },
  { id: 5, name: "NEP CRYSTAL PREMIUM", price: 22.99, image: "/images/crystals-white.png", slug: "nep-crystal", isBestseller: true },
  { id: 6, name: "BROMAZOLAM PINK PELLET", price: 18.50, image: "/images/pills-pink.png", slug: "bromazolam" },
  { id: 7, name: "SYNTHCAINE COLOMBIA", price: 35.00, image: "/images/crystals-white.png", slug: "synthcaine" },
  { id: 8, name: "HEX-EN TURBO CRYSTAL", price: 27.50, image: "/images/crystals-white.png", slug: "hex-en" },
  { id: 9, name: "3-MMC REPLACEMENT V2", price: 26.00, image: "/images/crystals-white.png", slug: "3-mmc-v2", isNew: true },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000]">
      <Header />

      <main className="flex-grow pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar column */}
            <div className="lg:w-1/4">
              <Sidebar />
            </div>

            {/* Content column */}
            <div className="lg:w-3/4 flex flex-col gap-8">

              {/* Banner Area */}
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-white/5 group">
                <Image
                  src="/images/hero-banner.png"
                  alt="Banner"
                  fill
                  className="object-cover opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent flex items-center p-12">
                  <div className="max-w-md text-left">
                    <span className="bg-[#f5a623] text-black text-[10px] font-black uppercase px-3 py-1 rounded-sm mb-4 inline-block tracking-widest">
                      New Arrival
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase italic tracking-tighter leading-none">
                      Orange <span className="text-[#f5a623]">Disco</span> Crystals
                    </h2>
                    <p className="text-gray-400 text-sm font-bold mb-8 uppercase tracking-widest leading-relaxed">
                      Highest purity research reagent in the EU market. Secure stealth shipping.
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded font-black uppercase text-[10px] tracking-widest hover:bg-[#f5a623] transition-all active:scale-95">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Bar (Screenshot Style) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#111111] p-6 rounded-lg border border-white/5">
                <div className="flex items-center gap-4 border-r border-white/5 pr-4">
                  <Truck className="w-8 h-8 text-[#f5a623]" />
                  <div className="text-left">
                    <h4 className="text-[10px] font-black uppercase text-[#f5a623]">Delivery</h4>
                    <p className="text-[9px] text-gray-500 font-bold">Safe & Stealth</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:border-r md:border-white/5 md:pr-4 md:pl-4">
                  <Package className="w-8 h-8 text-[#f5a623]" />
                  <div className="text-left">
                    <h4 className="text-[10px] font-black uppercase text-[#f5a623]">Every order</h4>
                    <p className="text-[9px] text-gray-500 font-bold">Small Gift Included</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:border-r md:border-white/5 md:pr-4 md:pl-4">
                  <ShieldCheck className="w-8 h-8 text-[#f5a623]" />
                  <div className="text-left">
                    <h4 className="text-[10px] font-black uppercase text-[#f5a623]">Lab Quality</h4>
                    <p className="text-[9px] text-gray-500 font-bold">99% Pure Crystals</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-4">
                  <Coins className="w-8 h-8 text-[#f5a623]" />
                  <div className="text-left">
                    <h4 className="text-[10px] font-black uppercase text-[#f5a623]">PAY IN BTC</h4>
                    <p className="text-[9px] text-gray-500 font-bold">+ Alt/Stable Coins</p>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


