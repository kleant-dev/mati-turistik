import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const destinations = [
  {
    id: 1,
    title: "Ura e Vashes",
    location: "Klos",
    src: "/uravashes.jpg",
  },
  {
    id: 2,
    title: "Parku Kombetar",
    location: "Ulez",
    src: "/ulez1.jpg",
  },
  {
    id: 3,
    title: "Parku Kombetar",
    location: "Gjoçaj",
    src: "/gjocaj.jpeg",
  },
];

export const DestinationCarousel = () => {
  return (
    <div className="">
      <Carousel className="relative">
        <CarouselContent className="ml-[60px]">
          {destinations.map(({ id, title, location, src }) => (
            <CarouselItem key={id}>
              <figure className="w-[282px] h-[318px] bg-[#1E1E1E]">
                <Image
                  src={src}
                  alt={title}
                  width={282}
                  height={212}
                  className="w-[282px] h-[212px]"
                />
                <figcaption className="text-white text-2xl pl-4 pt-2">
                  {title} <br />
                  {location}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-[64px] top-0 bottom-0 ">
          <CarouselNext />
        </div>
        <div className="absolute left-[64px] top-0 bottom-0 ">
          <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
};
