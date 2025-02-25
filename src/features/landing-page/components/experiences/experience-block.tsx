import { LucideArrowUpRightSquare } from "lucide-react";
import { ExperienceItem } from "./experience-item";
import { Button } from "@/components/ui/button";
import { eexperiences } from "@/features/landing-page/data/experiences";
import Link from "next/link";

type ExperienceBlockType = {
  selectedExperience: (typeof eexperiences)[keyof typeof eexperiences];
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
          Learn more <LucideArrowUpRightSquare />
        </Link>
      </Button>
    </div>
  );
};
