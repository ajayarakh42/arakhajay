"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { frameSequence } from "@/utils/frames";

import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameCount = frameSequence.length;
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        // Safety check if no frames
        if (frameCount === 0) {
            setIsLoaded(true);
            return;
        }

        frameSequence.forEach((filename) => {
            const img = new Image();
            img.src = `/sequence/${filename}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load ${filename}`);
                loadedCount++;
                if (loadedCount === frameCount) setIsLoaded(true);
            }
            imgs.push(img);
        });
        setImages(imgs);
    }, [frameCount]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let idx = Math.floor(index);
        if (idx < 0) idx = 0;
        if (idx >= frameCount) idx = frameCount - 1;

        const img = images[idx];
        if (!img) return;

        const w = window.innerWidth;
        const h = window.innerHeight;

        // Set canvas size to window size for best quality
        // Check if distinct from current to avoid flicker? 
        // Actually resizing canvas clears it, so only do it if mismatch
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
        }

        const imgRatio = img.width / img.height;
        const canvasRatio = w / h;

        let dw, dh, dx, dy;

        if (canvasRatio > imgRatio) {
            dw = w;
            dh = w / imgRatio;
            dx = 0;
            dy = (h - dh) / 2;
        } else {
            dh = h;
            dw = h * imgRatio;
            dy = 0;
            dx = (w - dw) / 2;
        }

        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, dx, dy, dw, dh);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        requestAnimationFrame(() => renderFrame(latest));
    });

    useEffect(() => {
        if (isLoaded) renderFrame(0);
    }, [isLoaded]);

    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) renderFrame(frameIndex.get());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-background-dark">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>

            {!isLoaded && (
                <div className="fixed inset-0 flex items-center justify-center bg-background-dark z-50 text-white font-sans text-xl">
                    Loading Experience...
                </div>
            )}
        </div>
    );
}
