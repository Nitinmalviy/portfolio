"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient.tsx";

export function ButtonHover({ BtnName }) {
    const goToGitHub = () => {
        window.location.href = 'https://github.com/Nitinmalviy';
    };

    return (

        <div className="m-2 ">
            <HoverBorderGradient
                containerClassName="rounded-full font-semibold"
                as="button"
                onClick={goToGitHub}
                className=" sm:m-1 md:m-2 m-0 cursor-pointer dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1"
            >
                <span>{BtnName}</span>
            </HoverBorderGradient>
        </div>
    );
}


