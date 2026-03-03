"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientHeading } from "@/components/ui/GradientHeading";

export function About() {
    const stats = [
        { label: "Years Experience", value: "6+" },
        { label: "Workers Deployed", value: "100+" },
        { label: "Industries Served", value: "15+" },
    ];

    return (
        <section id="about" className="relative py-24 px-4 overflow-hidden">

            {/* Background Decor - Removed for cleaner white look */}

            <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 w-fit shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-dsp-primary" />
                        <span className="text-xs uppercase tracking-widest text-dsp-neutral">Who We Are</span>
                    </div>

                    <GradientHeading size="lg" as="h2">
                        Pioneering the Future of <br /> Industrial Staffing
                    </GradientHeading>

                    <p className="text-lg text-gray-500 leading-relaxed">
                        DSP is more than a manpower agency; we are strategic partners in your growth.
                        We specialize in providing high-caliber talent that drives operational excellence across industries.
                    </p>

                    <p className="text-gray-500 leading-relaxed">
                        From heavy engineering to corporate logistics, our rigor in selection and training ensures
                        that every professional we deploy is ready to perform from day one.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {stats.map((stat, i) => (
                        <GlassCard key={i} hoverEffect className={i === 2 ? "sm:col-span-2 text-center" : ""}>
                            <h3 className="text-4xl md:text-5xl font-bold text-dsp-primary mb-2">{stat.value}</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
                        </GlassCard>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
