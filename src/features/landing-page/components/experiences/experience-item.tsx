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
    <figure className="flex gap-4 items-start rounded overflow-hidden">
      <div className="w-[150px] h-[106px] md:w-[220px] md:h-[160px] flex-shrink-0">
        <Image
          src={image}
          alt={label}
          width={150}
          height={106}
          className="object-cover rounded md:w-[220px] md:h-[160px]"
        />
      </div>
      <figcaption className="text-white ">
        <p className="font-semibold text-yellow-400 md:text-2xl ">{label}</p>
        <p className="text-sm md:text-xl">{description}</p>
      </figcaption>
    </figure>
  );
};
