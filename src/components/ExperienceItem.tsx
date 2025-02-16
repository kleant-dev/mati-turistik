import Image from "next/image";

type ExperienceItemProps = {
  image: string;
  description: string;
  label: string;
};

export const ExperienceItem = ({
  image,
  description,
  label,
}: ExperienceItemProps) => {
  return (
    <figure className="flex  gap-4 items-start">
      <Image
        src={image}
        alt={label}
        width={150}
        height={106}
        className="object-cover aspect-[150,200] flex-grow-0"
      />
      <figcaption className="text-white ">
        <p className="font-semibold">{label}</p>
        <p className="text-sm">{description}</p>
      </figcaption>
    </figure>
  );
};
