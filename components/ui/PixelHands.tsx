"use client";

import { useEffect, useRef } from "react";

interface PixelHandsProps {
    className?: string;
}

export function PixelHands({ className }: PixelHandsProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Load the silhouette map
        const image = new Image();
        image.src = "/hands-map-wide.png"; // New high-contrast wide map

        let animationFrameId: number;
        let time = 0;

        image.onload = () => {
            // Set canvas size to match display size
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;

            canvas.width = width;
            canvas.height = height;

            // Draw image to offscreen canvas to scale and center it
            const offCanvas = document.createElement('canvas');
            offCanvas.width = width;
            offCanvas.height = height;
            const offCtx = offCanvas.getContext('2d');
            if (!offCtx) return;

            // Draw image fit to contain - maintain aspect ratio
            // For this wide map, we want to ensure it stretches well
            // "cover" logic might cut off hands, "contain" sees the whole thing.
            // Given user wants "covers both ends", we should try to fill width primarily.
            const scale = Math.min(width / image.width, height / image.height);
            const scaledW = image.width * scale;
            const scaledH = image.height * scale;
            const xOffset = (width - scaledW) / 2;
            const yOffset = (height - scaledH) / 2;

            offCtx.drawImage(image, xOffset, yOffset, scaledW, scaledH);

            const pixelData = offCtx.getImageData(0, 0, width, height).data;

            // Dot configuration - Refined for scale
            const gap = 6; // slightly larger gap for clearer dots at scale
            const radius = 2; // larger dots for visibility

            const render = () => {
                time += 0.05;
                ctx.clearRect(0, 0, width, height);

                // Scan the grid
                for (let y = 0; y < height; y += gap) {
                    for (let x = 0; x < width; x += gap) {
                        // Get pixel index
                        const index = (y * width + x) * 4;
                        const r = pixelData[index];
                        const g = pixelData[index + 1];
                        const b = pixelData[index + 2];

                        // Check for darkness (Hand Silhouette)
                        const brightness = (r + g + b) / 3;

                        // Stricter threshold to avoid noise
                        if (brightness < 80) {
                            // Wave animation
                            const wave = Math.sin(x * 0.01 + y * 0.01 + time) * 0.5 + 0.5;

                            const normalizedX = x / width;

                            ctx.beginPath();
                            ctx.arc(x, y, radius, 0, Math.PI * 2);

                            // Green Gradient
                            const r = 0; // Keeping red 0 for green shades
                            const g = 130 + (163 - 130) * normalizedX; // 130 -> 163
                            const b = 86 + (108 - 86) * normalizedX;   // 86 -> 108

                            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.8 + wave * 0.2})`;
                            ctx.fill();
                        }
                    }
                }

                animationFrameId = requestAnimationFrame(render);
            };

            render();
        };

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: '100%', height: '100%' }}
        />
    );
}
