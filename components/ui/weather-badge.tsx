import { formatWeatherCode } from "@/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { cva } from "class-variance-authority";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const WeatherBadgeVariants = cva(
  "flex h-fit w-fit items-center justify-center rounded-2xl bg-neutral-0 p-2 text-neutral-800 shadow-lg shadow-transparent transition hover:shadow-neutral-300/50",
  {
    variants: {
      size: {
        md: "rounded-xl [&_svg]:size-8",
        lg: "[&_svg]:size-14",
      },
    },
  },
);

interface WeatherBadgeProps {
  weatherCode: string | number;
  isDaytime?: boolean;
  size?: "md" | "lg";
}

const WeatherBadge = ({
  weatherCode,
  isDaytime = true,
  size = "md",
}: WeatherBadgeProps) => {
  const formattedWeatherCode = formatWeatherCode({
    code: Number(weatherCode) || 0,
    isDaytime,
  });

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className={WeatherBadgeVariants({ size })}>
          <HugeiconsIcon icon={formattedWeatherCode.icon} />
        </div>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>
        <p>{formattedWeatherCode.description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WeatherBadge;
