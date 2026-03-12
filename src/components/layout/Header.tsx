"use client";

import { useState } from "react";
import { Search, ShoppingCart, Menu, Globe, Coins, X } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const Header = () => {
    const { items, currency, language } = useCartStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">

                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <a href="/" className="text-2xl font-black tracking-tighter text-[#222222]">
                        CHEM<span className="text-gray-400">CENTRUM</span>
                    </a>
                </div>

                {/* Search Bar - Centered & Premium */}
                <div className="hidden md:flex flex-grow max-w-xl relative group">
                    <input
                        type="text"
                        placeholder="Search research chemicals..."
                        className="w-full bg-[#F3F4F6] border-none rounded-2xl py-3 px-12 text-sm focus:ring-2 focus:ring-[#222222]/10 transition-all outline-none"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#222222] transition-colors" />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 lg:gap-6">

                    {/* selectors */}
                    <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#222222] transition-colors">
                            <Globe className="w-3.5 h-3.5" />
                            <span>{language}</span>
                        </div>
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#222222] transition-colors">
                            <Coins className="w-3.5 h-3.5" />
                            <span>{currency}</span>
                        </div>
                    </div>

                    {/* Cart Trigger */}
                    <button className="relative p-2.5 bg-[#222222] text-white rounded-2xl hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                        <ShoppingCart className="w-5 h-5" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-white text-[#222222] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#222222]">
                                {items.length}
                            </span>
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2.5 text-[#222222] hover:bg-gray-100 rounded-xl transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer (Basic implementation) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] md:hidden">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-xl font-black tracking-tighter">MENU</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 font-bold text-lg">
                            <a href="#" className="hover:text-gray-500 transition-colors">Home</a>
                            <a href="#" className="hover:text-gray-500 transition-colors">Shop All</a>
                            <a href="#" className="hover:text-gray-500 transition-colors">Safety Info</a>
                            <a href="#" className="hover:text-gray-500 transition-colors">Orders</a>
                        </nav>

                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
                            {/* Language/Currency toggles */}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
