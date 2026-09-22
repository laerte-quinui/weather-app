import { Coordinates } from "@/types";

/* -- SEARCHED LOCATION -- */
export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: Array<string>;
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3: string;
  admin4: string;
}

export interface LocationResponse {
  results: Array<Location>;
  generationtime_ms: number;
}

export interface LocationError {
  error: boolean;
  reason: string;
}

/* -- CURRENT LOCATION -- */
export interface CurrentLocation {
  ipVersion: number;
  ipAddress: string;
  latitude: Coordinates["latitude"];
  longitude: Coordinates["longitude"];
  countryName: string;
  countryCode: string;
  capital: string;
  phoneCodes: Array<number>;
  timeZones: Array<string>;
  zipCode: string;
  cityName: string;
  regionName: string;
  regionCode: string;
  continent: string;
  continentCode: string;
  currencies: Array<string>;
  languages: Array<string>;
  asn: string;
  asnOrganization: string;
  isProxy: boolean;
}
