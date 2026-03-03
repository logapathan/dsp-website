"use client";

import { motion } from "framer-motion";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { BrandLogo } from "@/components/ui/BrandLogo";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-300 pointer-events-none",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "pointer-events-auto flex items-center justify-between px-8 py-4 rounded-full border transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-xl border-gray-200 shadow-xl shadow-gray-200/50 w-[95%] md:w-[80%]"
                    : "bg-transparent border-transparent w-[95%]"
            )}>
                {/* Logo */}
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="flex flex-col items-center leading-none gap-0 font-bold tracking-tighter text-dsp-charcoal transition-all duration-300">
                    <BrandLogo className={cn("transition-all duration-300", scrolled ? "w-12 h-12" : "w-16 h-16")} />
                    <span className={cn(
                        "text-lg transition-all duration-300 overflow-hidden",
                        scrolled ? "max-h-0 opacity-0" : "max-h-8 opacity-100"
                    )}>DSP</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12">
                    {["About", "Services", "Why Us"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-base font-bold uppercase text-gray-600 hover:text-dsp-charcoal transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-dsp-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <GlossyButton variant="primary" className="px-6 py-2.5 text-base hidden sm:flex">
                        Contact Us
                    </GlossyButton>
                </div>
            </div>
        </motion.nav>
    );
}
