"use client";

import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, Eye, Star, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import QuickView from "./QuickView";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

const ProductCard = (product: ProductCardProps) => {
  const { addItem } = useCartStore();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      image: product.image, 
      slug: product.slug 
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-[#111111] border border-white/5 rounded-lg overflow-hidden flex flex-col hover:border-[#f5a623]/20 transition-all shadow-xl">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-[#0a0a0a]">
        <Link href={`/product/${product.slug}`} className="block h-full relative">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isBestseller && (
                <span className="bg-[#f5a623] text-black text-[9px] font-black uppercase px-3 py-1 rounded-sm shadow-xl">
                    Bestseller
                </span>
            )}
            {product.isNew && (
                <span className="bg-white text-black text-[9px] font-black uppercase px-3 py-1 rounded-sm shadow-xl">
                    New Crystal
                </span>
            )}
        </div>

        {/* Quick Actions Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button 
                onClick={() => setIsQuickViewOpen(true)}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#f5a623] transition-colors shadow-2xl scale-75 group-hover:scale-100 duration-300"
            >
                <Eye className="w-5 h-5 text-black" />
            </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-[#f5a623] text-[#f5a623]" />
            ))}
        </div>
        
        <Link href={`/product/${product.slug}`} className="block mb-3">
            <h3 className="text-sm font-black text-white hover:text-[#f5a623] transition-colors leading-snug line-clamp-2 uppercase tracking-wide">
                {product.name}
            </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-[#f5a623]">€{product.price.toFixed(2)}</span>
            <span className="text-[10px] text-gray-500 font-bold">Incl. VAT</span>
          </div>
          
          <button 
            onClick={handleAdd}
            className={cn(
                "w-full py-3 rounded-lg flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-all active:scale-95",
                added 
                ? "bg-green-500 text-white" 
                : "bg-white/5 border border-white/10 text-white hover:bg-[#f5a623] hover:text-black hover:border-transparent"
            )}
          >
            {added ? (
                <>
                    <Check className="w-4 h-4" />
                    Added!
                </>
            ) : (
                <>
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                </>
            )}
          </button>
        </div>
      </div>

      {isQuickViewOpen && <QuickView {...product} onClose={() => setIsQuickViewOpen(false)} />}
    </div>
  );
};

export default ProductCard;
