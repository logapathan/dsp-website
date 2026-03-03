"use client";

import { motion } from "framer-motion";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { PixelHands } from "@/components/ui/PixelHands";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-4 pt-20">

            {/* Background Gradient - subtle for white mode */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto space-y-8">

                {/* Animated Badge */}


                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <GradientHeading size="lg" className="leading-tight">
                        Elevating Service Standards
                    </GradientHeading>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
                >
                    Integrated facility solutions for apartments, gated communities, and commercial properties.
                    Powered by trained manpower, efficient systems, and a commitment to quality service.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                >
                    <GlossyButton variant="primary">Hire Talent</GlossyButton>
                    <GlossyButton variant="secondary">Request Manpower</GlossyButton>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white/50"
                    />
                </div>
            </motion.div>

        </section>
    );
}
