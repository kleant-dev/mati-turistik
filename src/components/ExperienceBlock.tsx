import { LucideArrowUpRightSquare } from "lucide-react";
import { ExperienceItem } from "./ExperienceItem";
import { Button } from "./ui/button";
import Link from "next/link";

export const experiences = {
  gastronomy: [
    {
      image: "/experiences/pulmequll.jpeg",
      label: "Pul me qull",
      description:
        "Një nga gatimet më të hershme tradicionale, i përgatitur nga mjeshtëria e nënave matjane.",
    },
    {
      image: "/experiences/pulmejufka.jpeg",
      label: "Pul me jufka",
      description:
        "Jufkat e përgatitura në shtëpi, janë krenaria e çdo amvise.",
    },
    {
      image: "/experiences/mishmequmesht.jpeg",
      label: "Tave qingji me qumesht",
      description:
        "I gatuar në këtë mënyrë, mishi merr një shije të mrekullueshme.",
    },
    {
      image: "/experiences/kungull.jpeg",
      label: "Kungull i zier/pjekur",
      description:
        "Kungulli i pjekur apo edhe i zier është shumë i shijshëm për t'u konsumuar.",
    },
  ],
  culture: [
    {
      image: "/experiences/muzeu.jpeg",
      label: "Muzeu Historik Mat",
      description:
        "Në muze përfaqësohen të gjitha periudhat e lashtësisë nga neoliti deri në mesjetë.",
    },
    {
      image: "/experiences/veshje.jpg",
      label: "Veshje popullore Matjane",
      description:
        "Mati është një nga krahinat më të pasura me veshje popullore.",
    },
    {
      image: "/images/kalajastelushit.jpg",
      label: "Kalaja e Stelushit",
      description: "Vërtetohet se këtu ka pasur një vendbanim të lashtë ilir. ",
    },
    {
      image: "/images/kalajapetralbes.webp",
      label: "Kalaja e Petralbës",
      description:
        "Kalaja e Petralbës ka qenë një nga qytetet kryesore të Gjon Kastrotit, të atit të Skënderbeut.",
    },
  ],
  leisure: [
    {
      image: "/experiences/kendi.jpg",
      label: "Këndi i Lojrave, Burrel",
      description:
        "I vendosur në brendësi të parkut, ju ofron mundësinë të kaloni një pasdite të këndshme.",
    },
    {
      image: "/experiences/doka.jpg",
      label: "Resort Vëllezërit Doka",
      description:
        "Resorti ofron një ambient relaksues dhe shërbime të nivelit të lartë.",
    },
    {
      image: "/experiences/shkopet.webp",
      label: "Udhëtim gjatë Shkopetit",
      description: "Relievi i thyer i zonës e bën një atraksion mbresëlënës.",
    },
    {
      image: "/images/ulez.jpg",
      label: "Xhiro me varkë në Ulëz",
      description:
        "Një aktivitet i tillë përgjatë një peizazhi si Ulëza vështirë për t'u humbur.",
    },
  ],
};

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
