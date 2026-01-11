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
            {/* Section 1: Center (Now Top-Left) */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex flex-col items-start justify-start text-left pt-36 pl-6 md:pl-20 overflow-hidden"
            >
                <div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4"
                    >
                        Ajay Arakh
                    </motion.h1>

                    <div className="flex flex-col items-start gap-2 overflow-hidden w-full max-w-[100vw]">
                        {/* Moving Left to Right */}
                        <motion.div
                            animate={{ x: ["-5%", "5%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 5,
                                ease: "easeInOut"
                            }}
                            className="w-full text-left"
                        >
                            <p className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-wide">
                                Data Scientist
                            </p>
                        </motion.div>

                        {/* Moving Right to Left */}
                        <motion.div
                            animate={{ x: ["5%", "-5%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 5,
                                ease: "easeInOut"
                            }}
                            className="w-full text-left"
                        >
                            <p className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan tracking-wide">
                                & Agentic AI Enthusiast
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Section 2: Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start p-8 md:p-32"
            >
                <h2 className="text-4xl md:text-7xl font-bold text-white max-w-4xl leading-tight">
                    Inventing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">future</span>, <br />
                    one insight at a time.
                </h2>
            </motion.div>

            {/* Section 3: Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end p-8 md:p-32"
            >
                <div className="text-right max-w-4xl">
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary">Insight.</span> <br />
                        Create. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Innovate</span>
                    </h2>
                </div>
            </motion.div>
        </div>
    );
}
