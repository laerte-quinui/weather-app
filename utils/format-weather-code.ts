import {
  CloudAngledRainZapIcon,
  CloudDrizzleIcon,
  CloudFogIcon,
  CloudHailIcon,
  CloudRainIcon,
  CloudSnowIcon,
  CloudyIcon,
  Moon02Icon,
  MoonCloudIcon,
  Sun03Icon,
  SunCloud02Icon,
} from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react";

interface WeatherCode {
  description: string;
  icon: IconSvgElement;
}

export function formatWeatherCode({
  code,
  isDaytime,
}: {
  code: number;
  isDaytime?: boolean;
}): WeatherCode {
  const weatherCodes: Record<number, WeatherCode> = {
    0: {
      description: "Clear Sky",
      icon: isDaytime ? Sun03Icon : Moon02Icon,
    },
    1: {
      description: "Mainly Clear",
      icon: isDaytime ? SunCloud02Icon : MoonCloudIcon,
    },
    2: {
      description: "Partly Cloudy",
      icon: isDaytime ? SunCloud02Icon : MoonCloudIcon,
    },
    3: {
      description: "Cloudy",
      icon: CloudyIcon,
    },
    45: {
      description: "Foggy",
      icon: CloudFogIcon,
    },
    48: {
      description: "Rime Fog",
      icon: CloudFogIcon,
    },
    51: {
      description: "Light Drizzle",
      icon: CloudDrizzleIcon,
    },
    53: {
      description: "Drizzle",
      icon: CloudDrizzleIcon,
    },
    55: {
      description: "Heavy Drizzle",
      icon: CloudDrizzleIcon,
    },
    56: {
      description: "Light Freezing Drizzle",
      icon: CloudDrizzleIcon,
    },
    57: {
      description: "Freezing Drizzle",
      icon: CloudDrizzleIcon,
    },
    61: {
      description: "Light Rain",
      icon: CloudRainIcon,
    },
    63: {
      description: "Rain",
      icon: CloudRainIcon,
    },
    65: {
      description: "Heavy Rain",
      icon: CloudRainIcon,
    },
    66: {
      description: "Light Freezing Rain",
      icon: CloudSnowIcon,
    },
    67: {
      description: "Freezing Rain",
      icon: CloudSnowIcon,
    },
    71: {
      description: "Light Snow",
      icon: CloudSnowIcon,
    },
    73: {
      description: "Snow",
      icon: CloudSnowIcon,
    },
    75: {
      description: "Heavy Snow",
      icon: CloudSnowIcon,
    },
    77: {
      description: "Snow Grains",
      icon: CloudSnowIcon,
    },
    80: {
      description: "Light Showers",
      icon: CloudRainIcon,
    },
    81: {
      description: "Showers",
      icon: CloudRainIcon,
    },
    82: {
      description: "Heavy Showers",
      icon: CloudRainIcon,
    },
    85: {
      description: "Light Snow Showers",
      icon: CloudSnowIcon,
    },
    86: {
      description: "Snow Showers",
      icon: CloudSnowIcon,
    },
    95: {
      description: "Thunderstorm",
      icon: CloudAngledRainZapIcon,
    },
    96: {
      description: "Light Thunderstorms With Hail",
      icon: CloudHailIcon,
    },
    99: {
      description: "Thunderstorm With Hail",
      icon: CloudHailIcon,
    },
  };

  return weatherCodes[code];
}
