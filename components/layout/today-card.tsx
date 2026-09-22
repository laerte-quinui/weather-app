"use client";

import { useGetForecast } from "@/api/forecast";
import { useGetCurrentLocation } from "@/api/location";
import bgLarge from "@/public/images/bg-today-large.svg";
import bgSmall from "@/public/images/bg-today-small.svg";
import { Coordinates } from "@/types";
import { formatTemperature, formatWeatherCode, getCurrentDate } from "@/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

const TodayCard = ({ coord }: { coord: Coordinates }) => {
  const { data: userLocation } = useGetCurrentLocation();
  const { data: forecast } = useGetForecast(coord, {
    select: (d) => d.current,
  });

  const weatherCode = formatWeatherCode({
    code: Number(forecast?.weather_code) || 0,
    isDaytime: forecast?.is_day === 1,
  });

  return (
    <div className="relative flex h-full min-h-fit w-full flex-[fit-content] flex-col items-center justify-between gap-4 overflow-hidden rounded-xl bg-blue-500 p-6 md:flex-1 md:flex-row">
      {/* Location */}
      <div className="z-1 flex h-fit flex-col gap-2 text-center md:text-start">
        <p className="text-2xl font-semibold">
          {userLocation?.cityName}, {userLocation?.countryName}
        </p>
        <p className="font-light text-neutral-200">{getCurrentDate()}</p>
      </div>

      {/* Weather */}
      <div className="z-1 flex h-fit items-center gap-4">
        <div className="flex items-center justify-center rounded-2xl bg-neutral-0 p-2">
          <HugeiconsIcon
            icon={weatherCode.icon}
            className="size-12 text-neutral-900 md:size-14"
          />
        </div>

        <p className="text-6xl font-semibold italic lg:text-8xl">
          {formatTemperature(forecast?.temperature_2m)}
        </p>
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-xl">
        <Image
          fill
          src={bgLarge}
          alt="Overview card background"
          className="hidden h-full w-full object-cover object-center md:block"
        />

        <Image
          fill
          src={bgSmall}
          alt="Overview card background"
          className="block h-full w-full object-cover object-center md:hidden"
        />
      </div>
    </div>
  );
};

export default TodayCard;
