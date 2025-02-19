"use client";
import { DestinationCarousel } from "./DestinationsCarousel";
import Sparkles from "@/components/ui/Sparkles";

export const DestinationsSection = () => {
  return (
    <section
      id="destinations"
      className="w-full bg-bgColor pt-[32px] flex flex-col gap-6"
    >
      <h2 className="text-2xl mx-0 w-full flex justify-center  text-white">
        <Sparkles>Destinacione mahnitëse</Sparkles>
      </h2>
      <DestinationCarousel />
    </section>
  );
};
