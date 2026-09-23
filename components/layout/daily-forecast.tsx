"use client";

import { useGetForecast } from "@/api/forecast";
import { Coordinates } from "@/types";
import { formatTemperature, getWeekDay } from "@/utils";
import Card from "../ui/card";
import WeatherBadge from "../ui/weather-badge";

const DailyForecast = ({ coord }: { coord: Coordinates }) => {
  const { data: forecast } = useGetForecast(coord, {
    select: (d) => d.daily,
  });

  const forecastMap = forecast?.time.map((time, index) => {
    const day = getWeekDay(time).slice(0, 3);
    const minTemp = formatTemperature(forecast?.temperature_2m_min[index]);
    const maxTemp = formatTemperature(forecast?.temperature_2m_max[index]);
    const weatherCode = forecast?.weather_code[index];

    return {
      day,
      weatherCode,
      temp: {
        min: minTemp,
        max: maxTemp,
      },
    };
  });

  return (
    <div className="mt-2 flex flex-col gap-4">
      <h5>Daily Forecast</h5>

      <div className="flex gap-4">
        {forecastMap?.map((forecast, index) => (
          <DayCard
            key={index}
            day={forecast.day}
            temp={forecast.temp}
            weatherCode={forecast.weatherCode}
          />
        ))}
      </div>
    </div>
  );
};

const DayCard = ({
  day,
  weatherCode,
  temp,
}: {
  day: string;
  weatherCode: string | number;
  temp: { min: string; max: string };
}) => {
  return (
    <Card className="w-full items-center gap-4 text-center">
      <h6 className="text-lg">{day}</h6>

      <WeatherBadge weatherCode={weatherCode} />

      <div className="flex w-full items-center justify-between [&_p]:font-light">
        <p>{temp.min}</p>
        <p>{temp.max}</p>
      </div>
    </Card>
  );
};

export default DailyForecast;
