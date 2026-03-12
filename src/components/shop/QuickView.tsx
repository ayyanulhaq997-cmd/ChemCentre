"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, ShieldCheck, Truck, RefreshCcw, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

interface QuickViewProps {
    id: number;
    name: string;
    price: number;
    image: string;
    slug: string;
}

const QuickView = ({ id, name, price, image, slug }: QuickViewProps) => {
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem({ id, name, price, image, slug });
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-12">
            {/* Image Gallery Mockup */}
            <div className="md:w-1/2">
                <div className="relative aspect-square rounded-3xl bg-gray-50 overflow-hidden border border-gray-100">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-contain p-12 mix-blend-multiply"
                    />
                </div>
                <div className="grid grid-cols-4 gap-4 mt-6">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square rounded-xl bg-gray-50 border border-gray-100" />
                    ))}
                </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 flex flex-col pt-4">
                <h1 className="text-3xl font-black text-[#222222] leading-tight mb-2">{name}</h1>
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-black text-[#222222]">€{price.toFixed(2)}</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        In Stock
                    </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    This is a premium high-purity laboratory research chemical.
                    Batch-tested for guaranteed purity over 99%.
                    Store in a cool, dry place away from direct sunlight.
                </p>

                {/* Quantity and Cart */}
                <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-gray-50 border border-gray-100 rounded-2xl h-14 px-4 gap-6">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="p-2 hover:text-black text-gray-400"
                            >
                                <Minus className="w-5 h-5" />
                            </button>
                            <span className="font-black text-lg w-4 text-center">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="p-2 hover:text-black text-gray-400"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="flex-grow h-14 bg-[#222222] text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-black/10"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Features / Trust */}
                <div className="grid grid-cols-1 gap-4 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                        <ShieldCheck className="w-5 h-5 text-green-500" />
                        Lab-Tested & Verified Purity
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                        <Truck className="w-5 h-5 text-blue-500" />
                        Discreet & Secure Express Shipping
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                        <RefreshCcw className="w-5 h-5 text-purple-500" />
                        Bitcoin & Crypto Payments Accepted
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickView;
