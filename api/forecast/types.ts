import { PrecipitationUnit, TemperatureUnit, WindSpeedUnit } from "@/types";

export interface Forecast {
  latitude: number;
  longitude: number;
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly: HourlyForecast;
  hourly_units: HourlyUnits;
}

interface HourlyForecast {
  time: Array<string>;
  temperature_2m: Array<number>;
}

interface HourlyUnits {
  temperature_2m: "°C" | "°F";
}

export interface ForecastError {
  error: boolean;
  reason: string;
}

/** The parameters for the forecast API
 *
 * More about the parameters here: https://open-meteo.com/en/docs#api_documentation
 */
export interface ForecastParams {
  latitude: number;
  longitude: number;
  elevation?: number;
  hourly?: Array<string>;
  daily?: Array<string>;
  current?: Array<string>;
  temperature_unit?: TemperatureUnit; // default celsius
  wind_speed_unit?: WindSpeedUnit; // default kmh
  precipitation_unit?: PrecipitationUnit; // default mm
  timeformat?: "unixtime" | "iso8601"; // default iso8601
  timezone?: "GMT" | "UTC" | "auto" | string; // default GMT
  past_days?: number; // default 0
  forecast_days?: number; // default 7
}
