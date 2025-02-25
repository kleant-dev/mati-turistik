import {
  Weather,
  WeatherSummaryResponseType,
} from "@/features/weather/components/weather";
import {
  WeatherForecast,
  WeatherForecastResponseType,
} from "@/features/weather/components/weather-forecast";
import { WeatherSummary } from "@/features/weather/components/weather-summary";
import { coordinates } from "@/features/weather/constants";
import axios, { AxiosResponse } from "axios";

const MotiPage = async () => {
  const currentConditionsResponse = await axios.get<
    string,
    AxiosResponse<WeatherSummaryResponseType, string>
  >(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`
  );

  const forecastResponse = await axios.get<
    string,
    AxiosResponse<WeatherForecastResponseType, string>
  >(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`
  );

  const currentConditions = currentConditionsResponse.data;
  const forecast = forecastResponse.data;

  const today = new Date();

  const filteredForecast = forecast.list.filter((item) => {
    if (new Date(item.dt_txt).getDate() === today.getDate()) {
      return false;
    }

    if (item.dt_txt.includes("12:00:00")) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <Weather>
        <WeatherSummary data={currentConditions} />
        <WeatherForecast data={filteredForecast} />
      </Weather>
    </div>
  );
};

export default MotiPage;
