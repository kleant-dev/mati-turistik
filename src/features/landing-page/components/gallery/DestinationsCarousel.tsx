"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { destinations } from "@/features/landing-page/data/destinations";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const DestinationCarousel = () => {
  return (
    <div className="">
      <Carousel responsive={responsive}>
        {destinations.map(({ id, title, location, src }) => (
          <Card
            key={id}
            className="bg-transparent text-white border-none mx-6 rounded-md flex flex-col items-center"
          >
            <figure className="">
              <CardHeader>
                <Image
                  src={src}
                  alt={title}
                  width={282}
                  height={212}
                  className="w-[282px] h-[212px] rounded-md"
                />
              </CardHeader>
              <CardContent>
                <figcaption className="text-white text-2xl text-left">
                  {title} <br />
                  {location}
                </figcaption>
              </CardContent>
            </figure>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};
