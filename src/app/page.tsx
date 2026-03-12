import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductCard from "@/components/shop/ProductCard";
import Footer from "@/components/layout/Footer";
import { ArrowRight, ChevronRight, ShieldCheck, Truck, Coins, Star, Mail, Zap, FlaskConical } from "lucide-react";

const products = [
  { id: 1, name: "3-CMC ICE BIG CRYSTALS", price: 24.99, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/3-cmc-ice-big-crystals.jpg", slug: "3-cmc-ice-big-crystals", isBestseller: true },
  { id: 2, name: "4-CMC BOULDER QUALITY", price: 29.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/4-cmc-boulder.jpg", slug: "4-cmc-boulder", isNew: true },
  { id: 3, name: "PENTEDRONE SPARK ORIGINAL", price: 32.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/pentedrone.jpg", slug: "pentedrone-spark" },
  { id: 4, name: "CLONAZOLAM 0.5MG PILLS", price: 15.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/clonazolam.jpg", slug: "clonazolam-pills" },
  { id: 5, name: "NEP CRYSTAL PREMIUM", price: 22.99, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/nep-crystal.jpg", slug: "nep-crystal", isBestseller: true },
  { id: 6, name: "BROMAZOLAM PINK PELLET", price: 18.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/bromazolam.jpg", slug: "bromazolam" },
  { id: 7, name: "SYNTHCAINE COLOMBIA", price: 35.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/synthcaine.jpg", slug: "synthcaine" },
  { id: 8, name: "HEX-EN TURBO CRYSTAL", price: 27.50, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/hex-en.jpg", slug: "hex-en" },
  { id: 9, name: "3-MMC REPLACEMENT V2", price: 26.00, image: "https://chemcentrum.nl/wp-content/uploads/2023/04/3-mmc-alt.jpg", slug: "3-mmc-v2", isNew: true },
];

const reviews = [
  { id: 1, author: "Marek P.", rating: 5, text: "Excellent quality crystals, very fast shipping to Poland. Highly recommended!", date: "2 days ago" },
  { id: 2, author: "Jan N.", rating: 5, text: "Best 3-CMC I've found so far. Customer support is top-notch.", date: "1 week ago" },
  { id: 3, author: "Krzysztof S.", rating: 4, text: "Discreet packaging and professional service. Will order again.", date: "2 weeks ago" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[#F9FAFB]">
        {/* Banner Section */}
        <div className="bg-[#222222] text-white py-20 relative overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">
                  <div className="w-12 h-[2px] bg-white/20" />
                  Official Laboratory Outlet
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
                  Purest <span className="text-gray-500 italic">Reagents</span> <br /> 
                  For Your Lab.
                </h1>
                <p className="text-gray-400 text-xl mb-10 max-w-lg font-medium leading-relaxed">
                  The most trusted European source for analytical compounds. 
                  Lab-verified purity and express-insured shipping since 2019.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-[#222222] px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-gray-100 transition-all shadow-2xl shadow-white/5">
                    Start Research
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                    View Catalog
                  </button>
                </div>
              </div>

              {/* Dynamic 3D-ish Element */}
              <div className="hidden lg:block relative w-[450px] h-[450px]">
                <div className="absolute inset-0 bg-white/5 rounded-full border border-white/10 animate-pulse" />
                <div className="absolute inset-10 bg-white/5 rounded-full border border-white/5 animate-reverse-spin" />
                <div className="absolute inset-20 bg-white/10 rounded-full border border-white/20 animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <FlaskConical className="w-32 h-32 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-white border-b border-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-[#222222]" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest">Express Shipping</h4>
                  <p className="text-gray-400 text-[10px] font-bold">1-2 Business Days</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#222222]" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest">Lab-Verified</h4>
                  <p className="text-gray-400 text-[10px] font-bold">99.9% Purity Guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <Coins className="w-6 h-6 text-[#222222]" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest">Crypto Payments</h4>
                  <p className="text-gray-400 text-[10px] font-bold">BTC, ETH, LTC & More</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#222222]" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest">Reward System</h4>
                  <p className="text-gray-400 text-[10px] font-bold">Bonus on every order</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Column */}
            <div className="lg:w-1/4">
              <Sidebar />
            </div>

            {/* Product Column */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-black">Featured Research</h2>
                  <p className="text-gray-400 text-sm font-medium mt-2">Latest laboratory grade components in stock.</p>
                </div>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] hover:text-gray-500 transition-colors">
                  View All Chemicals
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Newsletter Banner */}
              <div className="mt-24 bg-[#222222] rounded-[3rem] p-12 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl transition-transform group-hover:scale-110" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="max-w-md">
                    <h3 className="text-3xl font-black mb-4 tracking-tight">Stay ahead in research.</h3>
                    <p className="text-gray-400 font-medium">Get notified about new stock batches, purity reports, and exclusive discounts directly in your inbox.</p>
                  </div>
                  <div className="w-full lg:w-fit flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your research email..." 
                      className="bg-white/10 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-white/20 transition-all font-bold min-w-[300px]"
                    />
                    <button className="bg-white text-[#222222] px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                      Subscribe
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mt-24">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black">What Researchers Say</h2>
                  <div className="flex justify-center gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-black text-black" />)}
                  </div>
                  <p className="text-gray-400 text-sm font-medium mt-2">Trusted by 5,000+ satisfied clients across Europe.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {reviews.map(review => (
                    <div key={review.id} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i <= review.rating ? 'fill-black text-black' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic font-medium">
                        &quot;{review.text}&quot;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs uppercase tracking-widest text-[#222222]">{review.author}</span>
                        <span className="text-gray-400 text-[10px] font-bold uppercase">{review.date}</span>
                      </div>
                    </div>
                  ))}
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

