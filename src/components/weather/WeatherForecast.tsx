import { ForecastCard } from "./ForecastCard";

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "3h": number;
}

interface Sys {
  pod: string;
}

interface ForecastItem {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

interface City {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherForecastResponseType {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}

export const WeatherForecast = ({ data }: { data: ForecastItem[] }) => {
  console.log(data);
  return (
    <div className="w-full flex flex-col gap-4">
      {data.map((forecast) => (
        <ForecastCard
          key={forecast.dt}
          description={forecast.weather[0].description}
          dt_txt={forecast.dt_txt}
          icon={forecast.weather[0].icon}
          tempMax={forecast.main.temp_max}
          tempMin={forecast.main.temp_min}
        />
      ))}
    </div>
  );
};
