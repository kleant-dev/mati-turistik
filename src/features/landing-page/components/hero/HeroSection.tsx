"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";
import { prefilledText } from "@/features/map/landing-page/components/cta/CtaGlowingButton";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-[600px] w-full relative flex pt-[60px] justify-center"
      style={{
        backgroundImage: "url(/images/background.jpg)",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute inset-0 bg-bgColor/80 mix-blend-multiply"></div>
      <div className="relative z-1 flex  flex-col items-center gap-[27px]">
        <Image src="/logo.svg" alt="logo" width="164" height="177" />
        <div className="min-h-[60px] flex items-center justify-center w-full">
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
          Siguri, Komoditet <br /> Eksperienca të paharrueshme.
        </div>
        <Button
          asChild
          variant="link"
          size="lg"
          className="text-purple text-lg"
        >
          <Link href={`https://wa.me/+355676774668?text=${prefilledText}`}>
            Rezervoni tourin tuaj <LucideArrowRight className="mb-[-2px]" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
