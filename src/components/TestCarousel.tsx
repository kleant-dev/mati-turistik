"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TestimonialCard } from "./TestimonialCard";

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

const t = {
  name: "Emily",
  testimonial:
    "Exploring the district of Mat was a wonderful experience! The tour guide made it so easy to plan my trip, and I discovered hidden gems I never knew existed. From the stunning landscapes to the warm hospitality of the locals, everything was perfect. Highly recommend this to anyone visiting Albania!",
  image: "/testimonials/emilycarter.jpg",
};

export const TestCarousel = () => {
  return (
    <Carousel responsive={responsive}>
      <TestimonialCard
        image={t.image}
        testimonial={t.testimonial}
        name={t.name}
      />
      <TestimonialCard
        image={t.image}
        testimonial={t.testimonial}
        name={t.name}
      />
      <TestimonialCard
        image={t.image}
        testimonial={t.testimonial}
        name={t.name}
      />
    </Carousel>
  );
};
