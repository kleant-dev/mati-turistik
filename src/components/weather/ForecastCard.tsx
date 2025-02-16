import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { capitalize } from "@/utils/capitalize";
import { LucideArrowBigDown, LucideArrowBigUp } from "lucide-react";
import Image from "next/image";

type ForecastCardType = {
  description: string;
  icon: string;
  tempMax: number;
  tempMin: number;
  dt_txt: string;
};

export const ForecastCard = ({
  description,
  icon,
  tempMax,
  tempMin,
  dt_txt,
}: ForecastCardType) => {
  const iconSrc = `/weathericons/${icon}.svg`;
  const dayOfWeek = new Date(dt_txt).toLocaleString("default", {
    weekday: "long",
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{dayOfWeek}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-base justify-around px-10">
        <div className="flex flex-col items-center gap-2">
          <p>{capitalize(description)}</p>
          <Image src={iconSrc} alt={description} width={60} height={60} />
        </div>
        <div className="self-center flex flex-col gap-2">
          <p className="flex font-semibold">
            {tempMax}
            <span className="font-normal">°C</span>
            <LucideArrowBigUp fill="#ff780a" stroke="inherit" />
          </p>
          <p className="flex font-semibold">
            {tempMin}
            <span className="font-normal">°C</span>{" "}
            <LucideArrowBigDown fill="#09a8ec" stroke="inherit" />
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
