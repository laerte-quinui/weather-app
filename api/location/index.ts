import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { geocoding } from "../instances";
import { LocationError, LocationResponse } from "./types";

/**
 * Fetches location data based on a search query.
 * @param location - The name for the location.
 * @returns A promise that resolves to an array of location results.
 */
const getLocation = (location?: string): Promise<LocationResponse> => {
  const params = {
    count: 10,
    language: "en",
    format: "json",
  };

  return geocoding
    .get<LocationResponse>("/search", {
      params: {
        name: location,
        params,
      },
    })
    .then((response) => {
      return response.data;
    });
};

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
