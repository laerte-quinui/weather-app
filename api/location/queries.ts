import { geocoding } from "../instances";
import { LocationResponse } from "./types";

/**
 * Fetches location data based on a search query.
 * @param location - The name for the location.
 * @returns A promise that resolves to an array of location results.
 */
export const getLocation = (location?: string): Promise<LocationResponse> => {
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
