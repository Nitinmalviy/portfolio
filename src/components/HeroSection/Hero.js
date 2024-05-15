"use client";
import { Tooltip } from "flowbite-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight.tsx";
import { ButtonHover } from './ButtonHover.js';
import Card from "./IconsCard.js";
import { icons } from "./SkillData.js";
export function HeroHighlightDemo() {

    const [iconlist, setIcon] = useState(icons)

    return (
        <>
            <HeroHighlight>
                {/* Home section */}
                <section id="Home">
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
                        className="text-lg sm:2xl  px-4 md:text-2xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto my-44 "
                    >
                        Hello Developers&apos; My Name is Nitin and "I am a{"   "}
                        <Highlight className="text-black text-3xl dark:text-white">
                            Full Stack Developer
                        </Highlight>
                        driven by innovative thinking and a passion for creative solutions. With a knack for turning unique ideas into reality, I specialize in crafting projects that inspire and captivate."
                    </motion.h1>
                    <div className="flex justify-center  items-center -mt-36 mb-4">
                        <ButtonHover BtnName={"Go To Github"} />
                    </div >
                </section>
                {/* Project section */}
                <section>
                    <motion.h1 className="text-lg sm:2xl mt-24 px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                        Projects
                    </motion.h1>
                    <div className="grid w-full h-[700px] mt-32 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 md:gap-16 item-center justify-center">

                    </div>
                </section>
                {/* Skills section*/}
                <section id='Skills'>
                    <motion.h1 className="text-lg sm:2xl mb-8  px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                        Skills
                    </motion.h1>
                    <div className=" grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3  sm:gap-4 ">
                        {
                            iconlist.map((icon, index) => {
                                return <Tooltip content={icon.name}><Card icon={icon.icon} iconName={icon.name} prgressdisplay={"75"} progressvalue={75} /></Tooltip>
                            })
                        }
                    </div>
                </section>
                {/* About me secton */}
                <section id="About-Me">
                    <motion.h1 className="text-lg sm:2xl mt-5 mb-5 px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                        About Me
                        <div className="mt-8 text-lg md:text-2xl mb-20">
                            I'm Nitin Malviya, a passionate Frontend Developer with a knack for creating dynamic and user-friendly interfaces. My expertise lies in crafting web applications using React, Tailwind CSS, and other modern technologies. Recently, I've been delving into the world of Full Stack development, honing my skills in Node.js, Express, and database management with MongoDB and SQL. My journey in web development began with a strong foundation in HTML, CSS, and JavaScript, which I've leveraged to build innovative projects.
                        </div>
                    </motion.h1>
                </section>
            </HeroHighlight>
        </>
    );
}
