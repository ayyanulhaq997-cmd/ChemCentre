"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, Mail, Lock, User } from "lucide-react";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTab?: "signin" | "signup";
}

const AuthModal = ({ isOpen, onClose, initialTab = "signin" }: AuthModalProps) => {
    const [tab, setTab] = useState<"signin" | "signup">(initialTab);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                onClose();
            }, 1500);
        }, 1200);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
                    />
                    <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: 20 }}
                            className="bg-[#111111] border border-white/10 rounded-xl w-full max-w-md shadow-2xl pointer-events-auto overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/10">
                                <div className="flex gap-6">
                                    <button
                                        onClick={() => setTab("signin")}
                                        className={`text-xs font-black uppercase tracking-widest pb-1 transition-colors border-b-2 ${tab === "signin" ? "text-[#f5a623] border-[#f5a623]" : "text-gray-500 border-transparent hover:text-gray-300"}`}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        onClick={() => setTab("signup")}
                                        className={`text-xs font-black uppercase tracking-widest pb-1 transition-colors border-b-2 ${tab === "signup" ? "text-[#f5a623] border-[#f5a623]" : "text-gray-500 border-transparent hover:text-gray-300"}`}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="px-8 py-8">
                                {success ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-white font-black text-sm uppercase tracking-widest">
                                            {tab === "signin" ? "Welcome back!" : "Account created!"}
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {tab === "signup" && (
                                            <div>
                                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                                    Full Name
                                                </label>
                                                <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg px-4 h-12 gap-3 focus-within:border-[#f5a623]/50 transition-colors">
                                                    <User className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Your name"
                                                        className="bg-transparent text-xs text-white w-full outline-none placeholder:text-gray-600"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                                Email Address
                                            </label>
                                            <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg px-4 h-12 gap-3 focus-within:border-[#f5a623]/50 transition-colors">
                                                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="your@email.com"
                                                    className="bg-transparent text-xs text-white w-full outline-none placeholder:text-gray-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                                Password
                                            </label>
                                            <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg px-4 h-12 gap-3 focus-within:border-[#f5a623]/50 transition-colors">
                                                <Lock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    required
                                                    placeholder="••••••••"
                                                    className="bg-transparent text-xs text-white w-full outline-none placeholder:text-gray-600"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="text-gray-500 hover:text-white transition-colors flex-shrink-0"
                                                >
                                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>

                                        {tab === "signin" && (
                                            <div className="text-right">
                                                <button type="button" className="text-[10px] font-bold text-gray-500 hover:text-[#f5a623] transition-colors uppercase tracking-widest">
                                                    Forgot password?
                                                </button>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full h-12 bg-[#f5a623] text-black font-black text-xs uppercase tracking-widest rounded-lg hover:bg-[#e59512] transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                                        >
                                            {loading ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                    Please wait...
                                                </span>
                                            ) : tab === "signin" ? "Sign In" : "Create Account"}
                                        </button>

                                        <p className="text-center text-[10px] text-gray-500 pt-2">
                                            {tab === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
                                            <button
                                                type="button"
                                                onClick={() => setTab(tab === "signin" ? "signup" : "signin")}
                                                className="text-[#f5a623] font-black uppercase hover:underline"
                                            >
                                                {tab === "signin" ? "Sign Up" : "Sign In"}
                                            </button>
                                        </p>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
