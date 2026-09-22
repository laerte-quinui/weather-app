import { QueryOptions } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getCurrentLocation, getLocation } from "./queries";
import { CurrentLocation, LocationError, LocationResponse } from "./types";

/**
 * Custom hook to fetch location data using React Query.
 * @param location - The name for the location.
 * @returns An object containing the query result, loading state, and error state.
 */
export const useGetLocation = (
  location?: string,
  options?: QueryOptions<LocationResponse, LocationError>,
) =>
  useQuery({
    queryKey: ["location", location],
    queryFn: () => getLocation(location),
    ...options,
  });

/**
 * Custom hook to fetch the current location based on the user's IP address using React Query.
 * @returns An object containing the query result, loading state, and error state.
 */
export const useGetCurrentLocation = (
  options?: QueryOptions<CurrentLocation, unknown>,
) =>
  useQuery({
    queryKey: ["current-location"],
    queryFn: () => getCurrentLocation(),
    staleTime: 1000 * 60 * 60, // 1 hour
    ...options,
  });
