import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { capitalize } from "@/utils/capitalize";
import { LucideArrowBigDown, LucideArrowBigUp, LucideWind } from "lucide-react";
import Image from "next/image";

type ForecastCardType = {
  description: string;
  icon: string;
  temp: number;
  dt_txt: string;
  wind: number;
};

export const ForecastCard = ({
  description,
  icon,
  temp,
  dt_txt,
  wind,
}: ForecastCardType) => {
  const iconSrc = `/weathericons/${icon}.svg`;
  const dayOfWeek = new Date(dt_txt).toLocaleString("en-US", {
    weekday: "long",
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{capitalize(dayOfWeek)}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-base justify-around px-10">
        <div className="flex flex-col items-center gap-2">
          <p>{capitalize(description)}</p>
          <Image src={iconSrc} alt={description} width={60} height={60} />
        </div>
        <div className="self-center flex flex-col gap-2">
          <div className="flex font-semibold">
            {temp}
            <span className="font-normal ml-[2px] mr-[10px]">°C</span>
            <div className="flex">
              <LucideArrowBigUp
                fill="#ff780a"
                stroke="inherit"
                className="mr-[-7px]"
              />
              <LucideArrowBigDown fill="#09a8ec" stroke="inherit" />
            </div>
          </div>
          <div className="flex font-semibold">
            {wind}
            <span className="font-normal ml-[2px] mr-[10px]">m/s</span>
            <div className="flex">
              <LucideWind stroke="black" className="mr-[-7px]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
