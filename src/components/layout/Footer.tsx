"use client";

import { Mail, Phone, ShieldCheck, Truck, Award, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#111111] border-t border-white/5 pt-20 pb-12 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#222222] rounded flex items-center justify-center border border-white/10">
                                <span className="text-[#f5a623] text-xl font-black">C</span>
                            </div>
                            <span className="text-xl font-black tracking-tighter uppercase underline decoration-[#f5a623] decoration-2 underline-offset-4">
                                Chemcentrum
                            </span>
                        </div>
                        <p className="text-gray-500 text-xs font-bold leading-relaxed max-w-xs uppercase tracking-wider">
                            Premium laboratory reagent supplier based in the EU. 
                            Focusing on purity, stealth, and absolute customer anonymity.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#f5a623] hover:text-black transition-all">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#f5a623] hover:text-black transition-all">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#f5a623] hover:text-black transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[#f5a623] mb-8">Navigation</h4>
                        <ul className="space-y-4 text-xs font-bold text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors uppercase">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors uppercase">Chemical Catalog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors uppercase">Bulk Inquiries</a></li>
                            <li><a href="#" className="hover:text-white transition-colors uppercase">Loyalty Program</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[#f5a623] mb-8">Help & Support</h4>
                        <ul className="space-y-4 text-sm font-bold text-gray-400">
                            <li className="flex items-center gap-2 group cursor-pointer">
                                <Phone className="w-4 h-4 text-[#f5a623] group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold uppercase hover:text-white">Expert Consultation</span>
                            </li>
                            <li className="flex items-center gap-2 group cursor-pointer">
                                <Mail className="w-4 h-4 text-[#f5a623] group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold uppercase hover:text-white">Support Ticket</span>
                            </li>
                            <li className="flex items-center gap-2 group cursor-pointer">
                                <Truck className="w-4 h-4 text-[#f5a623] group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold uppercase hover:text-white">Stealth Shipping Info</span>
                            </li>
                        </ul>
                    </div>

                    {/* Standards */}
                    <div className="space-y-6">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[#f5a623] mb-8">Our Standards</h4>
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase text-gray-400">
                            <Award className="w-5 h-5 text-[#f5a623]" />
                            Certified Reagents
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase text-gray-400">
                            <ShieldCheck className="w-5 h-5 text-[#f5a623]" />
                            99% Purity Guaranteed
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase text-gray-400">
                            <Truck className="w-5 h-5 text-[#f5a623]" />
                            EU Warehouse Shipping
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest text-center md:text-left">
                        &copy; 2026 CHEM CENTRUM &bull; Research Use Only &bull; For laboratory analytical purposes.
                    </p>
                    <div className="flex items-center gap-6 opacity-30 invert">
                         {/* Mock Payment Gateways */}
                         <div className="w-12 h-6 bg-white rounded" />
                         <div className="w-12 h-6 bg-white rounded" />
                         <div className="w-12 h-6 bg-white rounded" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
