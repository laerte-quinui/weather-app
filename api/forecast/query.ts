import { forecast } from "../instances";
import { Forecast, ForecastParams } from "./types";

/**
 * Fetches weather forecast data based on the provided parameters.
 * @param params - The parameters for the forecast API.
 * @returns A promise that resolves to the forecast data.
 */
export const getForecast = async (
  params: ForecastParams,
): Promise<Forecast> => {
  return forecast
    .get<Forecast>("", {
      params,
    })
    .then((response) => response.data);
};
