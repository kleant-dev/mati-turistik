export type WeatherSummaryResponseType = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: number;
  cod: number;
};

export const Weather = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center py-8 px-6 gap-6 bg-[#60B4E2]">
      {children}
    </div>
  );
};
