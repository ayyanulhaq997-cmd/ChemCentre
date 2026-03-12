"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Plus, TrendingUp, Sparkles } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import Modal from "@/components/ui/Modal";
import QuickView from "@/components/shop/QuickView";

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    slug: string;
    isBestseller?: boolean;
    isNew?: boolean;
}

const ProductCard = ({ id, name, price, image, slug, isBestseller, isNew }: ProductCardProps) => {
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    return (
        <>
            <div className="group relative bg-white border border-gray-100 rounded-[2rem] p-4 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden">

                {/* Badges */}
                <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                    {isBestseller && (
                        <div className="bg-[#222222] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-black/20">
                            <TrendingUp className="w-3 h-3" />
                            Bestseller
                        </div>
                    )}
                    {isNew && (
                        <div className="bg-white text-[#222222] border-2 border-[#222222] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                            <Sparkles className="w-3 h-3 text-orange-400" />
                            New Crystal
                        </div>
                    )}
                </div>

                {/* Image Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 mb-6 drop-shadow-sm">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Hover Overlay - Quick View */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <button
                            onClick={() => setIsQuickViewOpen(true)}
                            className="bg-white text-[#222222] py-3 px-6 rounded-2xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100 scale-90 hover:scale-100"
                        >
                            <Eye className="w-4 h-4" />
                            Quick View
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="px-2 pb-2">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                        Research Chemicals
                    </h3>
                    <p className="text-lg font-black text-[#222222] leading-tight mb-4 group-hover:text-black transition-colors">
                        {name}
                    </p>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-400 line-through">
                                €{(price * 1.2).toFixed(2)}
                            </span>
                            <span className="text-xl font-black text-[#222222]">
                                €{price.toFixed(2)}
                            </span>
                        </div>

                        <button
                            onClick={() => addItem({ id, name, price, image, slug })}
                            className="h-14 w-14 bg-[#222222] text-white rounded-2xl flex items-center justify-center hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10"
                        >
                            <Plus className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                title="Product Laboratory Analysis"
            >
                <QuickView id={id} name={name} price={price} image={image} slug={slug} />
            </Modal>
        </>
    );
};

export default ProductCard;
