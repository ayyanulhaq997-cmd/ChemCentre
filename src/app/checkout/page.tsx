"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { Check, CreditCard, ChevronRight, ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { cn } from "@/lib/utils";

// Step Components
const Step1 = ({ next }: { next: () => void }) => {
    const { items, total, updateQuantity, removeItem } = useCartStore();

    if (items.length === 0) {
        return (
            <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingCart className="w-10 h-10 text-gray-300" />
                </div>
                <h2 className="text-2xl font-black mb-4">Your Cart is Empty</h2>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">Looks like you haven&apos;t added any research chemicals to your cart yet.</p>
                <button
                    onClick={() => window.location.href = "/"}
                    className="h-14 px-8 bg-[#222222] text-white rounded-2xl font-black hover:bg-black transition-all"
                >
                    Return to Shop
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-black mb-6">Review Your Order</h2>
                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 relative">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">{item.name}</h3>
                                    <p className="text-xs text-gray-400">Laboratory Grade</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-400 hover:text-black font-bold">-</button>
                                    <span className="font-bold text-sm">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-400 hover:text-black font-bold">+</button>
                                </div>
                                <span className="font-black">€{(item.price * item.quantity).toFixed(2)}</span>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-gray-300 hover:text-red-500 transition-colors ml-2"
                                    title="Remove item"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center text-xl font-black">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                </div>
            </div>

            <button
                onClick={next}
                className="w-full h-16 bg-[#222222] text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-black/10"
            >
                Continue to Shipping
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

const Step2 = ({ next, back }: { next: () => void, back: () => void }) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                <h2 className="text-2xl font-black mb-2">Shipping Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="bg-gray-50 border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-black/5" />
                    <input type="text" placeholder="Last Name" className="bg-gray-50 border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-black/5" />
                    <input type="text" placeholder="Shipping Address" className="md:col-span-2 bg-gray-50 border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-black/5" />
                    <input type="text" placeholder="City" className="bg-gray-50 border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-black/5" />
                    <input type="text" placeholder="Postal Code" className="bg-gray-50 border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-black/5" />
                </div>
                <textarea placeholder="Order Comment (Optional)" rows={4} className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-black/5" />
            </div>

            <div className="flex gap-4">
                <button onClick={back} className="flex-1 h-16 bg-white border border-gray-200 text-gray-500 rounded-2xl font-bold hover:bg-gray-50 transition-all">Back</button>
                <button onClick={next} className="flex-[2] h-16 bg-[#222222] text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-black/10">
                    Payment Method
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

const Step3 = () => {
    const [seconds, setSeconds] = useState(900); // 15 minutes

    useEffect(() => {
        if (seconds <= 0) return;
        const timer = setInterval(() => {
            setSeconds(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 text-center">
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm flex flex-col items-center">
                <div className="bg-orange-50 p-4 rounded-full mb-6">
                    <CreditCard className="w-10 h-10 text-orange-500" />
                </div>
                <h2 className="text-3xl font-black mb-2">Payment Required</h2>
                <p className="text-gray-400 text-sm mb-8">Please scan or copy the Bitcoin address below to complete your order.</p>

                <div className="bg-gray-50 p-6 rounded-2xl w-full mb-8 font-mono text-[10px] md:text-sm break-all border border-gray-100">
                    bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </div>

                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Payment Window Ends In</span>
                    <div className="text-4xl font-black tracking-tighter tabular-nums">
                        {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 w-full flex flex-col items-center gap-4">
                    <p className="text-xs font-medium text-gray-400">Waiting for transaction confirmation...</p>
                    <div className="w-8 h-8 border-4 border-[#222222] border-t-transparent rounded-full animate-spin" />
                </div>
            </div>
        </div>
    );
};

export default function CheckoutPage() {
    const [step, setStep] = useState(1);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#F9FAFB]">
                <Header />
                <main className="container mx-auto px-4 py-12 max-w-3xl flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-[#222222] border-t-transparent rounded-full animate-spin" />
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <Header />

            <main className="container mx-auto px-4 py-12 max-w-3xl">
                {/* Progress Tracker */}
                <div className="flex items-center justify-between mb-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 -z-10" />
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex flex-col items-center gap-3">
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500",
                                step >= s ? "bg-[#222222] border-[#222222] text-white shadow-lg shadow-black/20" : "bg-white border-gray-100 text-gray-300"
                            )}>
                                {step > s ? <Check className="w-6 h-6" /> : <span className="font-black">{s}</span>}
                            </div>
                            <span className={cn(
                                "text-[10px] font-black uppercase tracking-widest",
                                step >= s ? "text-[#222222]" : "text-gray-300"
                            )}>
                                {s === 1 ? "Review" : s === 2 ? "Shipping" : "Payment"}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Dynamic Step Rendering */}
                {step === 1 && <Step1 next={() => setStep(2)} />}
                {step === 2 && <Step2 next={() => setStep(3)} back={() => setStep(1)} />}
                {step === 3 && <Step3 />}

                <div className="mt-12 text-center">
                    <button
                        onClick={() => window.location.href = "/"}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Shop
                    </button>
                </div>
            </main>
        </div>
    );
}
