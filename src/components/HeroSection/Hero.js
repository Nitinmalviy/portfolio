"use client";
import { Tooltip } from "flowbite-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ButtonHover } from '../Button/ButtonHover.js';
import GlowingCard from "../Card/GlowingCard.js";
import Card from "../Card/IconsCard.js";
import { icons } from "../Card/SkillData.js";
import DownloadCV from "../DownloadCV/DownloadCV.js";
import { ProjectData } from "../ProjectSection/ProjectData.js";
import { HeroHighlight, Highlight } from "../ui/hero-highlight.tsx";
export function HeroHighlightDemo() {

    const [projectList, setProjectList] = useState(ProjectData)
    const [iconlist, setIcon] = useState(icons)

    return (
        <>
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
                    className="text-lg sm:2xl  px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto my-44 "
                >
                    My Name Is Nitin Malviya&apos; Frontend Developer
                    {" "}
                    <Highlight className="text-black dark:text-white">
                        Hii Developers
                    </Highlight>

                </motion.h1>

            </HeroHighlight>
            <div className="flex justify-center  items-center -mt-36 mb-4">
                <ButtonHover BtnName="My Projects" />
                <ButtonHover BtnName={<DownloadCV />} />

            </div >

            <HeroHighlight>
                <motion.h1 className="text-lg sm:2xl mt-24 px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                    Projects
                </motion.h1>
                <div className="grid w-full mt-32 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 md:gap-16 item-center justify-center">
                    {projectList.map((project, index) => {
                        return <GlowingCard projectTitle={project.title} projectimg={project.prjectImg} projectdedcription={project.prjectDescription} />
                    })}
                </div>


                <br />
                <br />
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
                <motion.h1 className="text-lg sm:2xl mt-5 mb-5 px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                    About Me
                </motion.h1>
                <div>

                </div>
            </HeroHighlight>
        </>
    );
}
