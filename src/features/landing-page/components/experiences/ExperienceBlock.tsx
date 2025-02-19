import { LucideArrowUpRightSquare } from "lucide-react";
import { ExperienceItem } from "./ExperienceItem";
import { Button } from "@/components/ui/button";
import { experiences } from "@/features/landing-page/data/experiences";
import Link from "next/link";

type ExperienceBlockType = {
  selectedExperience: (typeof experiences)[keyof typeof experiences];
  experienceLabel: string;
};

export const ExperienceBlock = ({
  selectedExperience,
}: ExperienceBlockType) => {
  return (
    <div className="flex flex-col gap-8 ">
      {selectedExperience.map(({ image, description, label }) => {
        return (
          <ExperienceItem
            key={image}
            image={image}
            description={description}
            label={label}
          />
        );
      })}
      <Button variant="link" className="text-blue-400 md:text-base">
        <Link
          // href={`/experience/${experienceLabel.toLowerCase()}`}
          href="#experiences"
          className="flex gap-2 items-center"
        >
          Mësoni më shumë <LucideArrowUpRightSquare />
        </Link>
      </Button>
    </div>
  );
};
