"use client";

import { MotionValue, useTransform, motion } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    // Section 1: 0% to 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: 30% to 60%
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.6], [50, -50]);

    // Section 3: 60% to 90%
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1.0], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.65, 1.0], [50, -50]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Section 1: Center */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center text-center p-4"
            >
                <div>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-4">
                        Ajay Arakh
                    </h1>
                    <p className="text-xl md:text-3xl font-light text-gray-400 tracking-wide uppercase">
                        Creative Developer
                    </p>
                </div>
            </motion.div>

            {/* Section 2: Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start p-8 md:p-32"
            >
                <h2 className="text-4xl md:text-7xl font-bold text-white max-w-4xl leading-tight">
                    I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">digital experiences</span> that matter.
                </h2>
            </motion.div>

            {/* Section 3: Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end p-8 md:p-32"
            >
                <div className="text-right max-w-4xl">
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary">Design</span> & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Engineering</span>.
                    </h2>
                </div>
            </motion.div>
        </div>
    );
}
