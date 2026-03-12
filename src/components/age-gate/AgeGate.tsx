"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setCookie, getCookie } from "cookies-next";

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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4"
            >
                <div className="relative bg-[#000000] border border-white/10 rounded-lg max-w-lg w-full p-8 md:p-12 text-center shadow-2xl">
                    <h2 className="text-[#f5a623] text-lg font-black uppercase tracking-widest mb-8">
                        WE ARE BACK - ENJOY. :)
                    </h2>
                    
                    <p className="text-white text-base font-bold mb-6">
                        The access of this shop is forbidden to underage users!
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-10">
                        Our shop sells products only to adults. You must confirm you are over 18 years old before entering. 
                        If you are under 18 you must leave this shop. Our services are for adults only!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleReject}
                            className="bg-[#333333] text-white py-3 px-8 rounded font-black uppercase text-xs hover:bg-[#444444] transition-all"
                        >
                            I&apos;m underage
                        </button>
                        <button
                            onClick={handleVerify}
                            className="bg-[#f5a623] text-black py-3 px-8 rounded font-black uppercase text-xs hover:bg-[#e59512] transition-all"
                        >
                            I&apos;m over 18, enter
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AgeGate;
