"use client";

import { useState } from "react";
import { ShieldCheck, Truck, RefreshCcw, Minus, Plus, X } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { motion } from "framer-motion";
import Image from "next/image";

interface QuickViewProps {
    id: number;
    name: string;
    price: number;
    image: string;
    slug: string;
    onClose: () => void;
}

const QuickView = ({ id, name, price, image, slug, onClose }: QuickViewProps) => {
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore((state) => state.addItem);
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem({ id, name, price, image, slug });
        }
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
            onClose();
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative bg-[#111111] border border-white/10 rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl"
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Image Area */}
                    <div className="md:w-1/2 p-12 bg-[#0a0a0a] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image 
                                src={image} 
                                alt={name} 
                                fill
                                className="object-contain max-h-[400px]"
                            />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#f5a623] mb-4">
                            <ShieldCheck className="w-4 h-4" />
                            Research Grade
                        </div>
                        
                        <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">
                            {name}
                        </h2>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-black text-[#f5a623]">€{price.toFixed(2)}</span>
                            <span className="text-xs text-gray-500 font-bold">Incl. VAT</span>
                        </div>

                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10">
                            Professional laboratory reagent. Batch tested 99%+ purity. 
                            Store at room temperature in a dry, dark place. 
                            Strictly for analytical research use only.
                        </p>

                        <div className="mt-auto space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center bg-[#222222] rounded-lg border border-white/10 h-14 px-4 gap-6">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Minus className="w-5 h-5" />
                                    </button>
                                    <span className="text-lg font-black text-white w-4 text-center">{quantity}</span>
                                    <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                                
                                <button 
                                    onClick={handleAddToCart}
                                    className={`flex-grow h-14 rounded-lg font-black uppercase text-xs tracking-widest transition-all ${
                                        added ? "bg-green-500 text-white" : "bg-[#f5a623] text-black hover:bg-white hover:text-black"
                                    }`}
                                >
                                    {added ? "Added to Cart!" : "Add to Cart"}
                                </button>
                            </div>

                            <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase text-gray-500">
                                    <Truck className="w-4 h-4 text-[#f5a623]" />
                                    Stealth Delivery Worldwide
                                </div>
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase text-gray-500">
                                    <RefreshCcw className="w-4 h-4 text-[#f5a623]" />
                                    Crypto Payments Supported
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default QuickView;
