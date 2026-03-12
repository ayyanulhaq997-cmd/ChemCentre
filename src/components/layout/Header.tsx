"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import AuthModal from "@/components/auth/AuthModal";
import CartDrawer from "@/components/shop/CartDrawer";

const Header = () => {
    const { items } = useCartStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [authModal, setAuthModal] = useState<{ open: boolean; tab: "signin" | "signup" }>({ open: false, tab: "signin" });
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const totalItems = mounted ? items.reduce((acc, i) => acc + i.quantity, 0) : 0;

    return (
        <>
            <header className="w-full bg-[#000000] text-white">
                {/* Top Bar */}
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
                                <button
                                    onClick={() => setAuthModal({ open: true, tab: "signin" })}
                                    className="hover:text-white transition-colors uppercase"
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setAuthModal({ open: true, tab: "signup" })}
                                    className="hover:text-white transition-colors uppercase"
                                >
                                    Sign Up
                                </button>
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

                {/* Main Header */}
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#222222] rounded flex items-center justify-center border border-white/5">
                            <div className="w-8 h-8 rounded-full border-2 border-[#f5a623]/20 flex items-center justify-center">
                                <span className="text-[#f5a623] text-xl font-black">C</span>
                            </div>
                        </div>
                        <h1 className="text-3xl font-black tracking-tighter">
                            Chemcentrum.nl
                        </h1>
                    </a>

                    <div className="flex items-center gap-8 md:gap-12">
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

                        {/* Cart Button */}
                        <button
                            onClick={() => setCartOpen(true)}
                            className="flex items-center gap-4 group"
                        >
                            <div className="relative">
                                <div className="w-12 h-12 bg-[#222222] rounded border border-white/10 flex items-center justify-center group-hover:border-[#f5a623]/50 transition-all">
                                    <ShoppingCart className="w-6 h-6 text-[#f5a623]" />
                                </div>
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#f5a623] text-black text-[10px] font-black rounded-full flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Shopping Cart</p>
                                <p className="text-xs font-black">{totalItems} {totalItems === 1 ? "Item" : "Items"}</p>
                            </div>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Nav Bar */}
                <div className="hidden md:block border-t border-white/10">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-8 py-0">
                            <a href="/" className="py-4 text-[11px] font-black uppercase tracking-widest text-[#f5a623] border-b-2 border-[#f5a623]">
                                Home
                            </a>
                            <a href="/category/3-cmc-ice" className="py-4 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white border-b-2 border-transparent hover:border-[#f5a623] transition-all">
                                Regular Crystals
                            </a>
                            <a href="/" className="py-4 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white border-b-2 border-transparent hover:border-[#f5a623] transition-all">
                                Shop All
                            </a>
                            <a href="#" className="py-4 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white border-b-2 border-transparent hover:border-[#f5a623] transition-all">
                                Contact
                            </a>

                            {/* Search */}
                            <div className="ml-auto flex items-center">
                                <div className="flex items-center bg-[#222222] h-10 px-4 rounded-l border border-white/10 border-r-0">
                                    <input
                                        type="text"
                                        placeholder="Search our catalog"
                                        className="bg-transparent text-xs w-48 outline-none placeholder:text-gray-500"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                window.location.href = `/search?q=${(e.target as HTMLInputElement).value}`;
                                            }
                                        }}
                                    />
                                </div>
                                <button
                                    onClick={(e) => {
                                        const input = (e.currentTarget.previousSibling as HTMLElement)?.querySelector("input") as HTMLInputElement;
                                        if (input) window.location.href = `/search?q=${input.value}`;
                                    }}
                                    className="h-10 px-4 bg-[#f5a623] text-black hover:bg-[#e59512] transition-colors rounded-r"
                                >
                                    <Search className="w-4 h-4" />
                                </button>
                            </div>
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
                                <a href="/category/3-cmc-ice">REGULAR CRYSTALS</a>
                                <a href="/">SHOP ALL</a>
                                <a href="#">CONTACT</a>
                                <hr className="border-white/10" />
                                <button
                                    onClick={() => { setIsMobileMenuOpen(false); setAuthModal({ open: true, tab: "signin" }); }}
                                    className="text-left"
                                >
                                    SIGN IN
                                </button>
                                <button
                                    onClick={() => { setIsMobileMenuOpen(false); setAuthModal({ open: true, tab: "signup" }); }}
                                    className="text-left"
                                >
                                    SIGN UP
                                </button>
                            </nav>
                        </div>
                    </div>
                )}
            </header>

            {/* Modals rendered outside header to avoid z-index issues */}
            <AuthModal
                isOpen={authModal.open}
                onClose={() => setAuthModal({ ...authModal, open: false })}
                initialTab={authModal.tab}
            />
            <CartDrawer
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
            />
        </>
    );
};

export default Header;
