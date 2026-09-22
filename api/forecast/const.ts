export const CURRENT_PARAMS = [
  "temperature_2m",
  "apparent_temperature",
  "relative_humidity_2m",
  "is_day",
  "precipitation",
  "weather_code",
  "wind_speed_10m",
] as const;

export const DAILY_PARAMS = [
  "weather_code",
  "temperature_2m_max",
  "temperature_2m_min",
] as const;

export const HOURLY_PARAMS = ["temperature_2m", "weather_code"] as const;
