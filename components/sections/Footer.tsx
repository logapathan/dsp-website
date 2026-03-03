"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { BrandLogo } from "@/components/ui/BrandLogo";
import Link from "next/link";

// Component for individual 3D Tilt Card
function TiltCard({ src, index }: { src: string; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="relative w-[500px] h-[320px] flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
        >
            <div className="w-full h-full rounded-lg overflow-hidden relative transform-cover translate-z-10">
                <img
                    src={src}
                    alt={`DSP Team ${index + 1}`}
                    className="object-cover w-full h-full"
                />

                {/* Dynamic sheen based on mouse position */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
            </div>
        </motion.div>
    );
}

export function CallToAction() {
    const images = [
        "/slider-1.jpg",
        "/slider-2.jpg",
        "/slider-3.jpg",
        "/slider-4.jpg",
    ];

    return (
        <section className="relative py-32 px-4 flex items-center justify-center overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto w-full pause-on-hover">
                <div className="relative w-full overflow-visible p-4">
                    <div className="flex w-max animate-scroll gap-6 py-10">
                        {/* First set of images */}
                        {images.map((src, index) => (
                            <TiltCard key={`slide-1-${index}`} src={src} index={index} />
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {images.map((src, index) => (
                            <TiltCard key={`slide-2-${index}`} src={src} index={index} />
                        ))}
                    </div>
                </div>
            </div>

        </section >
    );
}

export function Footer() {
    return (
        <footer className="relative pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                <div className="space-y-4">
                    <Link href="/" className="flex flex-col items-start gap-1 font-bold tracking-tighter text-dsp-charcoal">
                        <BrandLogo className="w-12 h-12" />
                        <span className="text-2xl pl-1">DSP</span>
                    </Link>
                    <p className="text-gray-500 max-w-xs">Powering industries with precision manpower and strategic staffing solutions.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h4 className="font-bold text-dsp-charcoal">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-dsp-primary transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-dsp-primary transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-dsp-primary transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-dsp-charcoal">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-dsp-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-dsp-primary transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-dsp-charcoal">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>info@dsp-manpower.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} DSP Solutions. All rights reserved.
            </div>
        </footer>
    );
}
