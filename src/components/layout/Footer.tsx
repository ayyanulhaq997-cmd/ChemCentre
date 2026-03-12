"use client";

import { Zap, Mail, Award, ShieldCheck, Truck } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#222222] rounded-lg flex items-center justify-center text-white font-black text-lg text-white">C</div>
                            <span className="text-xl font-black tracking-tighter text-[#222222]">CHEMCENTRUM</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                            Premium laboratory reagent supplier based in the EU. 
                            Focusing on purity, speed, and absolute customer anonymity.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                <Zap className="w-5 h-5 text-gray-500" />
                            </div>
                            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                <Mail className="w-5 h-5 text-gray-500" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-[#222222]">Navigation</h4>
                        <ul className="space-y-4 text-sm font-bold text-gray-500">
                            <li><a href="/" className="hover:text-[#222222] transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-[#222222] transition-colors">Chemical Catalog</a></li>
                            <li><a href="#" className="hover:text-[#222222] transition-colors">Bulk Inquiries</a></li>
                            <li><a href="#" className="hover:text-[#222222] transition-colors">Affiliate</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-[#222222]">Help & Support</h4>
                        <ul className="space-y-4 text-sm font-bold text-gray-500">
                            <li><a href="#" className="hover:text-[#222222] transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-[#222222] transition-colors">Payment Methods</a></li>
                            <li><a href="#" className="hover:text-[#222222] transition-colors">Contact Expert</a></li>
                            <li><a href="#" className="hover:text-[#222222] transition-colors">Lab Reports</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-[#222222]">Our Standards</h4>
                        <div className="flex items-center gap-3 text-xs font-bold text-gray-500">
                            <Award className="w-5 h-5 text-yellow-500" />
                            Certified Lab Equipment
                        </div>
                        <div className="flex items-center gap-3 text-xs font-bold text-gray-500">
                            <ShieldCheck className="w-5 h-5 text-green-500" />
                            Double Blind QC Testing
                        </div>
                        <div className="flex items-center gap-3 text-xs font-bold text-gray-500">
                            <Truck className="w-5 h-5 text-blue-500" />
                            Stealth Courier Options
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        &copy; 2026 CHEM CENTRUM &bull; Research Use Only &bull; All compounds are strictly for laboratory analytical purposes.
                    </p>
                    <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
