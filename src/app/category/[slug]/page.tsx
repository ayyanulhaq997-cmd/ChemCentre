"use client";

import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductCard from "@/components/shop/ProductCard";
import Footer from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";

// Mock common products database
const allProducts = [
    { id: 1, name: "3-CMC ICE BIG CRYSTALS", price: 24.99, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/3-cmc-ice-big-crystals.jpg", slug: "3-cmc-ice-big-crystals", categorySlug: "3-cmc-ice" },
    { id: 2, name: "4-CMC BOULDER QUALITY", price: 29.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/4-cmc-boulder.jpg", slug: "4-cmc-boulder", categorySlug: "4-cmc-boulder" },
    { id: 3, name: "PENTEDRONE SPARK ORIGINAL", price: 32.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/pentedrone.jpg", slug: "pentedrone-spark", categorySlug: "pentedrone-spark" },
    { id: 4, name: "CLONAZOLAM 0.5MG PILLS", price: 15.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/clonazolam.jpg", slug: "clonazolam-pills", categorySlug: "pills" },
    { id: 5, name: "NEP CRYSTAL PREMIUM", price: 22.99, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/nep-crystal.jpg", slug: "nep-crystal", categorySlug: "crystals" },
    { id: 6, name: "BROMAZOLAM PINK PELLET", price: 18.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/bromazolam.jpg", slug: "bromazolam", categorySlug: "pills" },
];

export default function CategoryPage() {
    const { slug } = useParams();

    const filteredProducts = allProducts.filter(p => p.categorySlug === slug);
    const categoryName = slug ? slug.toString().replace(/-/g, ' ').toUpperCase() : "CATEGORY";

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

                        {/* Product Column */}
                        <div className="lg:w-3/4">
                            <div className="flex items-center gap-4 mb-8 text-xs font-bold text-gray-400">
                                <span>HOME</span>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-[#222222]">CATEGORIES</span>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-[#222222]">{categoryName}</span>
                            </div>

                            <div className="mb-12">
                                <h1 className="text-4xl font-black mb-2">{categoryName}</h1>
                                <p className="text-gray-500 font-medium italic">Showing all laboratory grade products in this category.</p>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} {...product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-[2rem] p-20 text-center border border-dashed border-gray-200">
                                    <p className="text-gray-400 font-bold">No products found in this category yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
