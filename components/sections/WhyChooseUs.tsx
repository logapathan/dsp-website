"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { ShieldCheck, UserCheck, Zap, Clock } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Compliance & Safety",
        description: "100% compliant with labor laws and safety standards, ensuring zero risk for your operations.",
    },
    {
        icon: UserCheck,
        title: "Vetted Talent",
        description: "Rigorous 5-step screening process ensures only top-tier professionals are deployed.",
    },
    {
        icon: Zap,
        title: "Fast Deployment",
        description: "Rapid mobilization capabilities to meet urgent project timelines and scaling needs.",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Dedicated account managers available round-the-clock for seamless workforce management.",
    },
];

export function WhyChooseUs() {
    return (
        <section id="why-us" className="relative py-24 px-4 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dsp-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-16">
                <div className="text-center md:text-left md:flex justify-between items-end gap-8">
                    <div className="space-y-4">
                        <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 w-fit shadow-sm">
                            <span className="text-xs uppercase tracking-widest text-dsp-neutral">Why DSP?</span>
                        </div>
                        <GradientHeading size="lg" as="h2">Engineered for <br /> Reliability</GradientHeading>
                    </div>
                    <p className="md:max-w-md text-gray-500 text-lg md:text-right mt-4 md:mt-0">
                        We don't just fill positions; we optimize your workforce for maximum productivity and minimal downtime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <GlassCard key={i} hoverEffect className="flex flex-col gap-6 items-start group">
                            <div className="w-full pb-4 border-b border-gray-100 mb-2">
                                <h3 className="text-xl font-bold text-dsp-charcoal group-hover:text-dsp-primary transition-colors relative inline-block">
                                    {feature.title}
                                    <span className="absolute -bottom-5 left-0 w-8 h-1 bg-dsp-primary rounded-full" />
                                </h3>
                            </div>

                            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
