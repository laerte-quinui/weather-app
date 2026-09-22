import { QueryOptions } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { CURRENT_PARAMS, DAILY_PARAMS, HOURLY_PARAMS } from "./const";
import { getForecast } from "./query";
import { Forecast, ForecastError, ForecastParams } from "./types";

/**
 * Custom hook to fetch weather forecast data using React Query.
 * @param params - The parameters for the forecast API.
 * @returns An object containing the query result, loading state, and error state.
 */
export const useGetForecast = <TData = Forecast>(
  params: Omit<ForecastParams, "current" | "hourly" | "daily">,
  options?: QueryOptions<Forecast, ForecastError, TData>,
) => {
  return useQuery({
    queryKey: ["forecast", { lat: params.latitude, lon: params.longitude }],
    queryFn: () =>
      getForecast({
        ...params,
        current: CURRENT_PARAMS,
        daily: DAILY_PARAMS,
        hourly: HOURLY_PARAMS,
      }),
    ...options,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
