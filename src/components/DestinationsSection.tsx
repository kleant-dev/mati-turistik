"use client";
import { DestinationCarousel } from "./DestinationsCarousel";
import Sparkles from "./Sparkles";

export const DestinationsSection = () => {
  return (
    <div className="w-full bg-bgColor pt-8 flex flex-col gap-8">
      <h2 className="text-2xl mx-0 w-full flex justify-center text-white">
        <Sparkles>Destinacione mbreselenese</Sparkles>
      </h2>
      <DestinationCarousel />
    </div>
  );
};
