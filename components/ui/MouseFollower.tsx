"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [hovering, setHovering] = useState(false);

    // Smooth spring physics
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        // 1. Track Mouse Position
        const handleMouseMove = (e: MouseEvent) => {
            // Offset centers the cursor based on its size
            // Default size 30px -> offset 15
            // Hover size 150px -> offset 75
            const offset = hovering ? 75 : 15;
            mouseX.set(e.clientX - offset);
            mouseY.set(e.clientY - offset);
        };

        // 2. Track Hover State for Scaling
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoverable = target.matches("a, button, h1, h2, h3, h4, p, span, li, a *, button *");
            setHovering(isHoverable);
        };

        // Reset hover
        const handleMouseOut = () => {
            setHovering(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, [hovering, mouseX, mouseY]);

    return (
        <>
            {/* Layer 1: Difference Blend (Creates Black Scale, White Text) 
          Using pure white (#FFFFFF) difference against a white page creates an Inverted look.
          White BG -> Black Cursor BG.
          Black Text -> White Text inside Cursor.
      */}
            <motion.div
                className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
                style={{ x, y }}
                animate={{
                    width: hovering ? 150 : 30,
                    height: hovering ? 150 : 30,
                    opacity: 1
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />

            {/* Layer 2: Screen Blend (Tints Black to Red, Leaves White as White)
          This sits exactly on top of Layer 1.
          Black Cursor BG + Red Screen = Red Cursor BG.
          White Text + Red Screen = White Text. 
      */}
            <motion.div
                className="fixed top-0 left-0 bg-[#00A36C] rounded-full pointer-events-none z-[100] mix-blend-screen"
                style={{ x, y }}
                animate={{
                    width: hovering ? 150 : 30,
                    height: hovering ? 150 : 30,
                    opacity: 1
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
        </>
    );
}
