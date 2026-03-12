"use client";

import { Beaker, FlaskConical, TestTube2, Zap, Pill, Info } from "lucide-react";

const categories = [
    { name: "3-CMC ICE", icon: FlaskConical, slug: "3-cmc-ice" },
    { name: "4-CMC BOULDER", icon: Beaker, slug: "4-cmc-boulder" },
    { name: "PENTEDRONE SPARK", icon: Zap, slug: "pentedrone-spark" },
    { name: "Pills / Tabletky", icon: Pill, slug: "pills" },
    { name: "Crystals / Kryształy", icon: TestTube2, slug: "crystals" },
    { name: "Powder / Proszki", icon: Beaker, slug: "powder" },
];

const Sidebar = () => {
    return (
        <aside className="w-full h-fit sticky top-24 space-y-8">

            {/* Categories Navigation */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm overflow-hidden relative">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                    <div className="w-1 h-3 bg-[#222222] rounded-full" />
                    Product Categories
                </h3>

                <nav className="flex flex-col gap-1">
                    {categories.map((cat) => (
                        <a
                            key={cat.slug}
                            href={`/category/${cat.slug}`}
                            className="flex items-center gap-4 py-3.5 px-4 rounded-2xl text-[14px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#222222] transition-all group"
                        >
                            <cat.icon className="w-5 h-5 text-gray-400 group-hover:text-[#222222] transition-colors" />
                            <span>{cat.name}</span>
                        </a>
                    ))}
                </nav>
            </div>

            {/* Trust Badge / Info Card */}
            <div className="bg-[#222222] text-white rounded-3xl p-8 relative overflow-hidden group">
                {/* Abstract background effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-white/10 transition-colors" />

                <Info className="w-8 h-8 opacity-40 mb-4" />
                <h4 className="text-lg font-bold mb-2">Research Use Only</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    Our products are intended strictly for laboratory research and analytical purposes.
                    Not for human or animal consumption.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E5E7EB]">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Verified Pure
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
