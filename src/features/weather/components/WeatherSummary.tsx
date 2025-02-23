"use client";
import { WeatherSummaryResponseType } from "./Weather";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { capitalize } from "@/utils/capitalize";
import { useEffect, useState } from "react";

export const WeatherSummary = ({
  data,
}: {
  data: WeatherSummaryResponseType;
}) => {
  const [date, setDate] = useState<null | Date>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const imageSrc = `/weathericons/${data.weather[0].icon}.svg`;

  const day = date?.getDate() || "--";
  const month = date?.toLocaleString("sq-AL", { month: "long" }) || "--";
  const year = date?.getFullYear() || "----";
  const dayOfWeek =
    date?.toLocaleString("sq-AL", {
      weekday: "long",
      hour: "numeric",
      minute: "2-digit",
    }) || "-------";

  const formattedDate = `${day} ${month} ${year}`;
  return (
    <div className="w-[60%] flex justify-between">
      <div className="w-full flex flex-col items-center gap-4">
        <div className=" flex flex-col items-center gap-1">
          <h2 className="text-2xl mb-4">Burrel, Mat</h2>
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
          <span>{capitalize(dayOfWeek)}</span>
        </div>
      </div>
    </div>
  );
};
