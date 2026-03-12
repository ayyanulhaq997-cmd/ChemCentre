"use client";

import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import QuickView from "@/components/shop/QuickView";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";

// Mock products database
const allProducts = [
    { id: 1, name: "3-CMC ICE BIG CRYSTALS", price: 24.99, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/3-cmc-ice-big-crystals.jpg", slug: "3-cmc-ice-big-crystals" },
    { id: 2, name: "4-CMC BOULDER QUALITY", price: 29.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/4-cmc-boulder.jpg", slug: "4-cmc-boulder" },
    { id: 3, name: "PENTEDRONE SPARK ORIGINAL", price: 32.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/pentedrone.jpg", slug: "pentedrone-spark" },
    { id: 4, name: "CLONAZOLAM 0.5MG PILLS", price: 15.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/clonazolam.jpg", slug: "clonazolam-pills" },
    { id: 5, name: "NEP CRYSTAL PREMIUM", price: 22.99, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/nep-crystal.jpg", slug: "nep-crystal" },
    { id: 6, name: "BROMAZOLAM PINK PELLET", price: 18.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/bromazolam.jpg", slug: "bromazolam" },
];

export default function ProductDetailsPage() {
    const { slug } = useParams();
    const product = allProducts.find(p => p.slug === slug);

    if (!product) return <div>Product not found</div>;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow bg-[#F9FAFB] pt-12 pb-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar Column */}
                        <div className="lg:w-1/4">
                            <Sidebar />
                        </div>

                        <div className="lg:w-3/4">
                            <div className="flex items-center gap-4 mb-8 text-xs font-bold text-gray-400">
                                <span>HOME</span>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-[#222222]">PRODUCT</span>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-[#222222] uppercase">{product.slug.replace(/-/g, ' ')}</span>
                            </div>

                            <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm">
                                <QuickView {...product} onClose={() => {}} />
                            </div>

                            <div className="mt-12 bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm">
                                <h2 className="text-2xl font-black mb-6">Detailed Description</h2>
                                <div className="prose prose-sm max-w-none text-gray-500 space-y-4">
                                    <p>
                                        This research chemical is provided as a sample for laboratory analysis only.
                                        It is not intended for human or veterinary use. All chemical compounds are
                                        produced in a ISO 9001 certified environment to ensure maximum purity and consistency.
                                    </p>
                                    <p>
                                        <strong>Safety Precautions:</strong> Wear appropriate protective equipment when
                                        handling this substance. In case of accidental exposure, seek medical attention immediately.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Verified purity &gt; 99.8%</li>
                                        <li>Stabilized for long-term storage</li>
                                        <li>Mass Spectrometry (MS) verified</li>
                                        <li>Nuclear Magnetic Resonance (NMR) verified</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
