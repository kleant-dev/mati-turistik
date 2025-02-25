"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

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
      <div className="relative z-1 flex flex-col items-center gap-[27px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width="164"
          height="177"
          className="h-auto w-auto"
        />
        <div className="min-h-[60px] flex items-center justify-center w-full">
          <h1 className="text-gold text-4xl font-sirin">
            <Typewriter
              words={["Ready for  adventure?"]}
              cursorBlinking
              typeSpeed={35}
            />
          </h1>
        </div>
        <div className="w-[419px] h-[156px] text-center text-[#e6e6e6] text-2xl font-normal font-['Alata']">
          Discover the beauty of Mat. <br />
          Safety, Comfort, <br /> Unforgettable experiences.
        </div>
        <Button
          asChild
          variant="link"
          size="lg"
          className="text-purple text-lg"
        >
          <Link href="/new-booking">
            Book your tour <LucideArrowRight className="mb-[-2px]" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
