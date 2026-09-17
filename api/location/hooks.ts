import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getLocation } from "./queries";
import { LocationError, LocationResponse } from "./types";

/**
 * Custom hook to fetch location data using React Query.
 * @param location - The name for the location.
 * @returns An object containing the query result, loading state, and error state.
 */
export const useGetLocation = (
  location?: string,
  options?: Omit<
    UseQueryOptions<LocationResponse, LocationError>,
    "queryKey" | "queryFn"
  >,
) =>
  useQuery({
    queryKey: ["location", location],
    queryFn: () => getLocation(location),
    ...options,
  });
