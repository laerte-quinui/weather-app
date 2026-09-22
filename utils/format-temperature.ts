export function formatTemperature(
  temperature: string | number | boolean | undefined,
): string {
  if (temperature === undefined || temperature === null) return "N/A";
  if (typeof temperature === "string")
    return `${Math.round(Number(temperature))}º`;
  if (typeof temperature === "number") return `${Math.round(temperature)}º`;
  if (typeof temperature === "boolean") return temperature ? "1" : "0";
  return "N/A";
}
