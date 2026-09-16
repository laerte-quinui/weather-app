import axios from "axios";

export const geocoding = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});
