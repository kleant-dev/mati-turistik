import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

type TestimonialCardProps = {
  name: string;
  testimonial: string;
  image: string;
};

export const TestimonialCard = ({
  name,
  testimonial,
  image,
}: TestimonialCardProps) => {
  return (
    <Card className="bg-transparent text-white border-dashed border-2 mx-6 flex flex-col items-center h-[450px]">
      <CardHeader>
        <div className="h-[130px]">
          <Image
            src={image}
            width={100}
            height={100}
            alt={name}
            className="rounded-[50%]"
          />
        </div>
        <p className="text-pink-400 text-center">{name}</p>
      </CardHeader>
      <CardContent>
        <blockquote className="">&quot; {testimonial} &quot; </blockquote>
      </CardContent>
    </Card>
  );
};
