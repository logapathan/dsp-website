"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { Briefcase, HardHat, Users, Building2 } from "lucide-react";

const services = [
    {
        icon: HardHat,
        title: "Skilled Manpower",
        description: "Certified technicians, welders, and engineers ready for heavy industrial tasks.",
    },
    {
        icon: Users,
        title: "Semi-Skilled Workforce",
        description: "Efficient workforce for assembly lines, logistics, and manufacturing support.",
    },
    {
        icon: Briefcase,
        title: "Contract Staffing",
        description: "Flexible staffing solutions to meet seasonal demands and project deadlines.",
    },
    {
        icon: Building2,
        title: "Corporate Solutions",
        description: "Administrative, IT, and front-office staff for seamless business operations.",
    },
];

export function Services() {
    return (
        <section id="services" className="relative py-24 px-4">

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">

                <div className="text-center space-y-4">
                    <GradientHeading size="lg" as="h2">Our Core Capabilities</GradientHeading>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive workforce solutions designed to scale with your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <GlassCard key={idx} hoverEffect className="group">
                            <h3 className="text-xl font-bold text-dsp-charcoal mb-3 group-hover:text-dsp-primary transition-colors border-l-4 border-dsp-primary pl-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed pl-4">
                                {service.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>

            </div>
        </section>
    );
}
