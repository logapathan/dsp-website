"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlossyButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
}

export function GlossyButton({ children, className, variant = "primary", ...props }: GlossyButtonProps) {
    const variants = {
        primary: "bg-gradient-to-br from-dsp-primary to-dsp-primary-dark text-white shadow-[0_10px_20px_rgba(0,163,108,0.3),inset_0_2px_10px_rgba(255,255,255,0.3)] border-white/20 hover:shadow-[0_15px_30px_rgba(0,163,108,0.4),inset_0_2px_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5",
        secondary: "bg-white text-dsp-neutral shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-200 hover:bg-gray-50 hover:shadow-lg",
        outline: "bg-transparent border border-gray-300 text-dsp-neutral hover:bg-gray-50",
    };
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative rounded-full px-8 py-4 font-medium tracking-wide transition-all duration-300 border backdrop-blur-md overflow-hidden group",
                variants[variant],
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
            {/* Liquid Sheen */}
            <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/20 to-transparent blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 inset-x-0 h-[50%] bg-gradient-to-t from-black/10 to-transparent" />
        </motion.button>
    );
}
