"use client";

import { useGetForecast } from "@/api/forecast";
import { Coordinates } from "@/types";
import { formatTemperature } from "@/utils";
import Card from "../ui/card";

const TodayDetails = ({ coord }: { coord: Coordinates }) => {
  const { data: forecast } = useGetForecast(coord, {
    select: (d) => d.current,
  });

  const details = [
    {
      title: "Feels like",
      detail: formatTemperature(forecast?.apparent_temperature),
    },
    { title: "Humidity", detail: `${forecast?.relative_humidity_2m}%` },
    {
      title: "Wind",
      detail: `${Math.round(Number(forecast?.wind_speed_10m) || 0)} km/h`,
    },
    { title: "Precipitation", detail: `${forecast?.precipitation} mm` },
  ];

  return (
    <div className="flex w-full gap-4">
      {details.map((detail, index) => (
        <DetailCard key={index} title={detail.title} detail={detail.detail} />
      ))}
    </div>
  );
};

const DetailCard = ({ title, detail }: { title: string; detail: string }) => {
  return (
    <Card className="w-full gap-4">
      <h6 className="text-sm text-neutral-300">{title}</h6>
      <p className="text-2xl font-light">{detail}</p>
    </Card>
  );
};

export default TodayDetails;
