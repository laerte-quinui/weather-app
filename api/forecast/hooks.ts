import { QueryOptions } from "@/types/query";
import { useQuery } from "@tanstack/react-query";
import { getForecast } from "./query";
import { Forecast, ForecastError, ForecastParams } from "./types";

/**
 * Custom hook to fetch weather forecast data using React Query.
 * @param params - The parameters for the forecast API.
 * @returns An object containing the query result, loading state, and error state.
 */
export const useGetForecast = (
  params: ForecastParams,
  options?: QueryOptions<Forecast, ForecastError>,
) =>
  useQuery({
    queryKey: ["forecast", params],
    queryFn: () => getForecast(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
    ...options,
  });
