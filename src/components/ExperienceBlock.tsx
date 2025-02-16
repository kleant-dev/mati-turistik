import { ExperienceItem } from "./ExperienceItem";

export const gastronomy = [
  {
    image: "/experiences/pulmequll.jpeg",
    label: "Pul me qull",
    description:
      "Një nga gatimet më të hershme tradicionale, i përgatitur nga mjeshtëria e nënave matjane.",
  },
  {
    image: "/experiences/pulmejufka.jpeg",
    label: "Pul me jufka",
    description: "Jufkat e përgatitura në shtëpi, janë krenaria e çdo amvise.",
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
      "Kungulli i pjekur apo edhe i zier është shumë i shijshëm për t'u konsumuar ",
  },
];

export const ExperienceBlock = () => {
  return (
    <div className="flex flex-col gap-4 ">
      {gastronomy.map(({ image, description, label }) => {
        return (
          <ExperienceItem
            key={image}
            image={image}
            description={description}
            label={label}
          />
        );
      })}
    </div>
  );
};
