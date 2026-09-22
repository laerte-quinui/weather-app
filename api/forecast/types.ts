import { PrecipitationUnit, TemperatureUnit, WindSpeedUnit } from "@/types";
import { CURRENT_PARAMS, DAILY_PARAMS, HOURLY_PARAMS } from "./const";

export interface Forecast {
  latitude: number;
  longitude: number;
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  current: CurrentResponse;
  hourly: HourlyResponse;
  daily: DailyResponse;
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
  current?: readonly CurrentParams[];
  hourly?: readonly HourlyParams[];
  daily?: readonly DailyParams[];
  temperature_unit?: TemperatureUnit; // default celsius
  wind_speed_unit?: WindSpeedUnit; // default kmh
  precipitation_unit?: PrecipitationUnit; // default mm
  timeformat?: "unixtime" | "iso8601"; // default iso8601
  timezone?: "GMT" | "UTC" | "auto" | string; // default GMT
  past_days?: number; // default 0
  forecast_days?: number; // default 7
}

type CurrentParams = (typeof CURRENT_PARAMS)[number];
type HourlyParams = (typeof HOURLY_PARAMS)[number];
type DailyParams = (typeof DAILY_PARAMS)[number];

type CurrentResponse = { time: string } & Record<
  CurrentParams,
  number | string | boolean
>;
type HourlyResponse = { time: string[] } & Record<
  HourlyParams,
  number[] | string
>;
type DailyResponse = { time: string[] } & Record<
  DailyParams,
  number[] | string
>;
