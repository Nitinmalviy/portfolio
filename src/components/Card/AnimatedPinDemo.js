"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin.tsx";

export default function AnimatedPinDemo(props) {
  const { projectLink } = props;
  return (
    <div className="sm:h-[40rem] h-[20rem]  flex items-center justify-center ">
      <PinContainer
        title={projectLink}
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex  flex-col p-2 sm:p-2 tracking-tight text-slate-100/50 sm:basis-1/2   md:w-[20rem] md:h-[20rem] w-[14rem] h-[18rem] rounded-md ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 rounded-md">
            My Projects
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              My E-Commerce Project Screpify
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg m-6 " />
          <img className="rounded-" src="https://cdn.shopify.com/s/files/1/2806/9936/t/71/assets/pf9c33fdd9horizontalzerowasteswaps0503croppedjpg--edited-1675372402122.jpg?v=1675372412" />
        </div>
      </PinContainer>
    </div>
  );
}
