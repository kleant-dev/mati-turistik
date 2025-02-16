"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";
import { LucideArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      className="h-[600px] w-full relative flex pt-[60px] justify-center"
      style={{
        backgroundImage: "url(/images/background.jpg)",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute inset-0 bg-bgColor/80 mix-blend-multiply"></div>
      <div className="relative z-1 flex  flex-col items-center gap-[27px]">
        <Image src="/logo.svg" alt="logo" width="164" height="177" />
        <div>
          <h1 className="text-gold text-4xl font-sirin">
            <Typewriter
              words={["Jeni gati për aventurë?"]}
              cursorBlinking
              typeSpeed={35}
            />
          </h1>
        </div>
        <div className="w-[419px] h-[156px] text-center text-[#e6e6e6] text-2xl font-normal font-['Alata']">
          Zbulo bukuritë e Matit. <br />
          Udhëtim, Aventurë <br /> Eksperienca të paharrueshme.
        </div>
        <Button variant="outline" size="lg" className="text-purple ">
          Rezervoni tourin tuaj <LucideArrowRight className="mb-[-2px]" />
        </Button>
      </div>
    </section>
  );
};
