"use client";
import { motion } from "framer-motion";
import AnimatedPinDemo from '../Card/AnimatedPinDemo.js';
import { HeroHighlight } from "../ui/hero-highlight.tsx";

export default function ProjectSection() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl -m-24 px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                My Projects
                {" "}


            </motion.h1>
            <div className="grid h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 -m-28">
                <AnimatedPinDemo />
                <AnimatedPinDemo />
                <AnimatedPinDemo />
            </div>
        </HeroHighlight>
    );
}
