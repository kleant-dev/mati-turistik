"use client";
import { TestimonialCard } from "./testimonial-card";
import { etestimonials } from "@/features/landing-page/data/testimonials";
import { Dots } from "@/components/ui/Dots";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-bgColor pt-[82px] flex flex-col gap-8 relative"
    >
      <h2 className="text-2xl text-center text-white font-bold">
        Testimonials
      </h2>
      <Carousel responsive={responsive}>
        {etestimonials.map(({ image, name, testimonial }) => (
          <TestimonialCard
            key={image}
            image={image}
            name={name}
            testimonial={testimonial}
          />
        ))}
      </Carousel>
      <Dots className="absolute opacity-15 top-16 right-0" />
    </section>
  );
};
