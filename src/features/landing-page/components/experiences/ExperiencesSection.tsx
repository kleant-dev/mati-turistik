"use client";

import { ExperienceTabs } from "./ExperienceTabs";
import Sparkles from "@/components/ui/Sparkles";

export const ExperiencesSection = () => {
  return (
    <section
      id="experiences"
      className="w-full bg-bgColor pt-[82px] px-6 flex flex-col gap-10"
    >
      <Sparkles>
        <h2 className="text-2xl text-center text-white font-bold">
          Eksperienca
        </h2>
      </Sparkles>
      <ExperienceTabs />
    </section>
  );
};
