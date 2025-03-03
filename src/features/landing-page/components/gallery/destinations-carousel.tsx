import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { edestinations } from "@/features/landing-page/data/destinations";

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
    slidesToSlide: 1,
    // optional, default to 1.
  },
};

export const DestinationCarousel = () => {
  return (
    <div>
      <Carousel
        showDots={true}
        containerClass="carousel-container z-[1] flex gap-4"
        ssr={true}
        responsive={responsive}
      >
        {edestinations.map(({ id, title, location, src }) => (
          <Card
            key={id}
            className="bg-transparent text-white border-none rounded-md flex flex-col items-center"
          >
            <figure>
              <CardHeader>
                <Image
                  src={src}
                  alt={title}
                  width={332}
                  height={250}
                  className="w-[332px] h-[250px] rounded-md"
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
