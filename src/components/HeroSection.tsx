"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      className="h-[460px] w-full relative flex pt-[60px] justify-center"
      style={{
        backgroundImage: "url(/background.jpg)",
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
      </div>
    </section>
  );
};
