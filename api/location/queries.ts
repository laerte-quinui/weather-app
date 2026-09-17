import { geocoding, ipApi } from "../instances";
import { CurrentLocation, LocationResponse } from "./types";

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

/**
 * Fetches the current location based on the user's IP address.
 * @returns A promise that resolves to the current location data.
 */
export const getCurrentLocation = (): Promise<CurrentLocation> => {
  return ipApi.get("").then((response) => {
    return response.data;
  });
};
