import { Coordinates } from "@/types";
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
export const getCurrentLocation = (): Promise<CurrentLocation> =>
  ipApi.get("").then((response) => response.data);

/**
 * Fetches the current coordinates (latitude and longitude) based on the user's IP address.
 *
 * If the IP-based location cannot be determined, it returns default coordinates for New York City.
 * @returns A promise that resolves to an object containing latitude and longitude.
 */
export const getCurrentCoordinates = async (): Promise<Coordinates> => {
  // Default coordinates set to New York City in case the IP-based
  // location cannot be determined.
  const defaultCoord = {
    latitude: 40.7128,
    longitude: -74.006,
  };

  try {
    const currentLocation = await getCurrentLocation();
    return {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
    };
  } catch (error) {
    console.error("Error fetching current coordinates:", error);
    return defaultCoord;
  }
};
