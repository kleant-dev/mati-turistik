"use client";
import { DestinationCarousel } from "./DestinationsCarousel";
import Sparkles from "./Sparkles";

export const DestinationsSection = () => {
  return (
    <section className="w-full bg-bgColor pt-10 flex flex-col gap-6">
      <h2 className="text-2xl mx-0 w-full flex justify-center  text-white">
        <Sparkles>Destinacione mbreselenese</Sparkles>
      </h2>
      <DestinationCarousel />
    </section>
  );
};
