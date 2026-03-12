"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setCookie, getCookie } from "cookies-next";
import { ShieldAlert, CheckCircle2, XCircle } from "lucide-react";

/**
 * AgeGate Component
 * Prevents access to the site until the user confirms they are 18+
 * Stores acceptance in a 24-hour cookie.
 */
const AgeGate = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already verified their age
        const isVerified = getCookie("age-verified");
        if (!isVerified) {
            setIsVisible(true);
        }
    }, []);

    const handleVerify = () => {
        // Set cookie for 24 hours
        setCookie("age-verified", "true", {
            maxAge: 60 * 60 * 24,
            path: "/",
            sameSite: "lax",
        });
        setIsVisible(false);
    };

    const handleReject = () => {
        // Redirect to a neutral page if they are not 18+
        window.location.href = "https://www.google.com";
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-lg w-full overflow-hidden border border-white/10"
                    >
                        {/* Header Section with Dark Aesthetic */}
                        <div className="bg-[#222222] p-10 text-center text-white relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                            <ShieldAlert className="w-20 h-20 mx-auto mb-6 text-[#E5E7EB] opacity-90" />
                            <h2 className="text-3xl font-bold tracking-tight mb-2">Age Verification</h2>
                            <p className="text-gray-400 text-lg">
                                Are you 18 years or older?
                            </p>
                        </div>

                        {/* Content Section */}
                        <div className="p-10 space-y-6">
                            <div className="space-y-4 text-center">
                                <p className="text-gray-600 text-base leading-relaxed">
                                    The content of this website is intended for adults only.
                                    By entering this site, you certify that you are of legal age (18+)
                                    in your jurisdiction to view and purchase research chemicals.
                                </p>

                                <div className="inline-block p-3 bg-gray-50 rounded-lg border border-gray-100 italic text-xs text-gray-500">
                                    Disclaimer: Our products are for laboratory research use only.
                                </div>
                            </div>

                            {/* Interaction Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    id="age-verify-yes"
                                    onClick={handleVerify}
                                    className="flex-1 bg-[#222222] text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-black/10"
                                >
                                    <CheckCircle2 className="w-6 h-6" />
                                    Yes, I am 18+
                                </button>
                                <button
                                    id="age-verify-no"
                                    onClick={handleReject}
                                    className="flex-1 bg-white border-2 border-gray-100 text-gray-700 py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                >
                                    <XCircle className="w-6 h-6" />
                                    No, I leave
                                </button>
                            </div>
                        </div>

                        {/* Footer Text */}
                        <div className="bg-gray-50 py-4 px-6 text-center border-t border-gray-100">
                            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-widest">
                                Protected by ChemCentrum &bull; Secure Connection
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AgeGate;
