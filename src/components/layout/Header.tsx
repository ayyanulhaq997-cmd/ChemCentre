"use client";

import { useState } from "react";
import { Search, ShoppingCart, Menu, X, ChevronDown, Phone, Mail, Home } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const Header = () => {
    const { items } = useCartStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#000000] text-white">
            {/* Top Bar - Utility */}
            <div className="border-b border-white/10 py-2 text-[11px] font-medium text-gray-400">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
                            <Mail className="w-3 h-3 text-[#f5a623]" />
                            Contact us
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                            <a href="#" className="hover:text-white transition-colors uppercase">Sign in</a>
                            <a href="#" className="hover:text-white transition-colors uppercase">Sign up</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                                <span>EUR €</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                                <span>English</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - Brand & Support */}
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#222222] rounded flex items-center justify-center border border-white/5">
                        {/* Placeholder for skull logo */}
                        <div className="w-8 h-8 rounded-full border-2 border-[#f5a623]/20 flex items-center justify-center">
                            <span className="text-[#f5a623] text-xl font-black">C</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-black tracking-tighter">
                        Chemcentrum.nl
                    </h1>
                </a>

                <div className="flex items-center gap-12">
                    {/* Support Block */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border border-[#f5a623]/20 flex items-center justify-center">
                            <Phone className="w-6 h-6 text-[#f5a623]" />
                        </div>
                        <div>
                            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Support 24h</p>
                            <p className="text-xs font-black">7 days in a week</p>
                        </div>
                    </div>

                    {/* Cart Block */}
                    <button className="flex items-center gap-4 bg-[#111111] p-3 rounded-lg border border-white/5 hover:border-[#f5a623]/30 transition-all">
                        <div className="relative">
                            <ShoppingCart className="w-8 h-8 text-[#f5a623]" />
                            <span className="absolute -top-1 -right-1 bg-[#f5a623] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                                {items.length}
                            </span>
                        </div>
                        <div className="text-left hidden lg:block">
                            <p className="text-[11px] text-[#f5a623] font-black uppercase tracking-wider leading-none mb-1">Shopping Cart</p>
                            <p className="text-xs font-bold text-gray-400">{items.length} items</p>
                        </div>
                    </button>
                    
                    <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden">
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* Navigation Bar & Search */}
            <div className="bg-[#111111] border-y border-white/5">
                <div className="container mx-auto px-4 flex items-center justify-between h-14">
                    <nav className="flex items-center">
                        <a href="/" className="h-14 w-14 flex items-center justify-center border-r border-white/5 hover:bg-white/5 transition-colors">
                            <Home className="w-5 h-5 text-[#f5a623]" />
                        </a>
                        <a href="#" className="h-14 px-8 flex items-center text-xs font-black uppercase tracking-widest border-r border-white/5 hover:bg-white/5 transition-colors">
                            Home
                        </a>
                        <a href="#" className="h-14 px-8 flex items-center text-xs font-black uppercase tracking-widest border-r border-white/5 hover:bg-white/5 transition-colors text-gray-400">
                            Regular Crystals
                        </a>
                    </nav>

                    <div className="hidden md:flex items-center h-full">
                        <div className="flex items-center bg-[#222222] h-10 px-4 rounded-l border border-white/10 border-r-0">
                            <input 
                                type="text" 
                                placeholder="Search our catalog" 
                                className="bg-transparent text-xs w-64 outline-none placeholder:text-gray-500"
                            />
                        </div>
                        <button className="h-10 px-4 bg-[#f5a623] text-black hover:bg-[#e59512] transition-colors rounded-r">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="absolute top-0 right-0 h-full w-[80%] bg-[#111111] border-l border-white/10 p-8">
                        <div className="flex justify-between items-center mb-12">
                             <h2 className="text-2xl font-black">Menu</h2>
                             <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X className="w-8 h-8" />
                             </button>
                        </div>
                        <nav className="flex flex-col gap-6 font-bold text-lg">
                            <a href="/" className="text-[#f5a623]">HOME</a>
                            <a href="#">REGULAR CRYSTALS</a>
                            <a href="#">SHOP ALL</a>
                            <a href="#">CONTACT</a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
