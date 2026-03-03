"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientHeadingProps {
    children: React.ReactNode;
    className?: string;
    size?: "xl" | "lg" | "md";
    as?: "h1" | "h2" | "h3";
}

export function GradientHeading({ children, className, size = "xl", as: Component = "h1" }: GradientHeadingProps) {
    const sizes = {
        xl: "text-5xl md:text-7xl lg:text-8xl",
        lg: "text-4xl md:text-6xl",
        md: "text-3xl md:text-4xl",
    };

    return (
        <Component className={cn("font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-dsp-neutral via-dsp-neutral to-dsp-neutral/60", sizes[size], className)}>
            {children}
        </Component>
    );
}
