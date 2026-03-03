import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function BrandLogo({ className }: { className?: string }) {
    return (
        <div className={cn("relative", className)}>
            <Image
                src="/logo.png"
                alt="DSP Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}
