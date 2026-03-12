"use client";

import { Menu, ChevronRight } from "lucide-react";

const categories = [
    { name: "3-CMC ICE", slug: "3-cmc-ice" },
    { name: "3-CMC TOP MICRO", slug: "3-cmc-top-micro" },
    { name: "3-CMC VOLCANO", slug: "3-cmc-volcano" },
    { name: "4-CMC BOULDER", slug: "4-cmc-boulder" },
    { name: "4-CMC ICE", slug: "4-cmc-ice" },
    { name: "4-MMC SULTAN ANALOG", slug: "4-mmc-sultan" },
    { name: "4-MMC ANALOG OLD CR...", slug: "4-mmc-old" },
    { name: "4-MMC LUX ANALOG", slug: "4-mmc-lux" },
    { name: "SYNTHCAINE COLOMBIA", slug: "synthcaine" },
    { name: "STRONG SYNTHCAINE C...", slug: "strong-synthcaine" },
    { name: "NEP STONE", slug: "nep-stone" },
    { name: "HEX-EN TURBO", slug: "hex-en-turbo" },
    { name: "A-PVP ROCKET", slug: "a-pvp-rocket" },
    { name: "PENTEDRONE SPARK", slug: "pentedrone-spark" },
];

const Sidebar = () => {
    return (
        <aside className="w-full bg-[#111111] border border-white/5 overflow-hidden">
            <div className="bg-[#1a1a1a] px-6 py-4 flex items-center justify-between border-b border-white/5">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Products</h3>
                <Menu className="w-5 h-5 text-gray-500" />
            </div>
            
            <ul className="py-2">
                {categories.map((cat, idx) => (
                    <li key={idx}>
                        <a 
                            href={`/category/${cat.slug}`}
                            className="flex items-center justify-between px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 hover:text-[#f5a623] hover:bg-white/5 transition-all border-b border-white/[0.02]"
                        >
                            {cat.name}
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </li>
                ))}
            </ul>

            <div className="p-6 mt-4">
                <div className="bg-[#f5a623]/5 border border-[#f5a623]/20 rounded-lg p-6">
                    <h4 className="text-[#f5a623] text-xs font-black uppercase mb-3">EU Shipping</h4>
                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                        Secure stealth delivery across all European countries within 24-48 hours.
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
