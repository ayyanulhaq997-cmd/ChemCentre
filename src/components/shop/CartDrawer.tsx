"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { items, total, removeItem, updateQuantity, clearCart } = useCartStore();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[150] bg-black/70 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#111111] border-l border-white/10 z-[151] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <ShoppingCart className="w-5 h-5 text-[#f5a623]" />
                                <h2 className="text-sm font-black uppercase tracking-widest text-white">
                                    Shopping Cart
                                </h2>
                                <span className="bg-[#f5a623] text-black text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center">
                                    {items.reduce((acc, i) => acc + i.quantity, 0)}
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-white transition-colors p-1"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-grow overflow-y-auto">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                                        <ShoppingCart className="w-9 h-9 text-gray-600" />
                                    </div>
                                    <p className="text-white font-black text-sm uppercase tracking-widest">Your cart is empty</p>
                                    <p className="text-gray-500 text-xs">Add some products to get started.</p>
                                    <button
                                        onClick={onClose}
                                        className="mt-2 px-6 py-3 bg-[#f5a623] text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-[#e59512] transition-all"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="divide-y divide-white/5">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex items-center gap-4 px-6 py-5">
                                            <div className="w-16 h-16 bg-[#1a1a1a] rounded-lg overflow-hidden flex-shrink-0 relative border border-white/5">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <h3 className="text-xs font-black text-white uppercase tracking-wide line-clamp-2 mb-1">
                                                    {item.name}
                                                </h3>
                                                <p className="text-[#f5a623] text-sm font-black">
                                                    €{(item.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end gap-3 flex-shrink-0">
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-600 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                                <div className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-lg px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-white text-xs font-black w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-white/10 p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Order Total</span>
                                    <span className="text-xl font-black text-white">€{total.toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={() => { window.location.href = "/checkout"; onClose(); }}
                                    className="w-full h-12 bg-[#f5a623] text-black font-black text-xs uppercase tracking-widest rounded-lg hover:bg-[#e59512] transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Proceed to Checkout
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={onClose}
                                    className="w-full h-10 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-lg hover:bg-white/10 transition-all"
                                >
                                    Continue Shopping
                                </button>
                                <button
                                    onClick={clearCart}
                                    className="w-full text-[10px] font-bold text-gray-600 hover:text-red-500 transition-colors uppercase tracking-widest"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
