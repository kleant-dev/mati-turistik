import { WeatherSummaryResponseType } from "./Weather";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { capitalize } from "@/utils/capitalize";

export const WeatherSummary = ({
  data,
}: {
  data: WeatherSummaryResponseType;
}) => {
  const imageSrc = `/weathericons/${data.weather[0].icon}.svg`;
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const dayOfWeek = date.toLocaleString("default", {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
  });

  const formattedDate = `${day} ${month} ${year}`;
  return (
    <div className="w-[60%] flex justify-between">
      <div className="w-full flex flex-col items-center gap-4">
        <div className=" flex flex-col items-center gap-1">
          <Image
            src={imageSrc}
            alt="weather-icon"
            width={150}
            height={100}
            className="pb-4"
            priority
          />
          <span className="text-3xl">
            {data.main.temp}
            <span className="text-2xl">°C</span>
          </span>
          <p>{capitalize(data.weather[0].description)}</p>
        </div>
        <Separator />
        <div className="flex flex-col gap-1 text-center">
          <span>{formattedDate}</span>
          <span>{dayOfWeek}</span>
        </div>
      </div>
    </div>
  );
};
