"use client";
import { TestimonialCard } from "./TestimonialCard";
import { Dots } from "./Dots";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Anisa",
    testimonial:
      "Udhëtimi nëpër Mat ishte një përvojë e paharruar! Faleminderit për udhëheqjen e shkëlqyer dhe për tregimet interesante rreth historisë dhe kulturave të këtij rajoni. Unë ua rekomandoj sinqerisht të gjithëve që duan të zbulojnë bukuritë e fshehura të Shqipërisë. Do të kthehem për një aventurë tjetër!",
    image: "/testimonials/anisahoxha.jpg",
  },
  {
    name: "Arjan",
    testimonial:
      "Mati është një vend magjik, dhe kjo agjensi më ndihmoi të zbuloj gjithçka që ofron ky qark. Nga malet e bukura deri tek fshatrat tradicionale, çdo detaj ishte i organizuar në mënyrë të përsosur. Një përvojë që do ta kujtoj për një kohë të gjatë!",
    image: "/testimonials/arjanbasha.jpg",
  },
  {
    name: "Emily",
    testimonial:
      "Exploring the district of Mat was a wonderful experience! The tour guide made it so easy to plan my trip, and I discovered hidden gems I never knew existed. From the stunning landscapes to the warm hospitality of the locals, everything was perfect. Highly recommend this to anyone visiting Albania!",
    image: "/testimonials/emilycarter.jpg",
  },
];

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
        Çfarë mendojnë klientët tanë për ne?
      </h2>
      <Carousel responsive={responsive}>
        {testimonials.map(({ image, name, testimonial }) => (
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
