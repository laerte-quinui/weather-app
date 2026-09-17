import axios from "axios";

export const geocoding = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});

export const ipApi = axios.create({
  baseURL: "https://free.freeipapi.com/api/v1/json",
});
