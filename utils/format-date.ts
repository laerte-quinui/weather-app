const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function getCurrentDate(): string {
  const date = new Date();
  const weekDay = DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];
  const monthDay = date.getDate();
  const year = date.getFullYear();

  return `${weekDay}, ${month} ${monthDay}, ${year}`;
}

export function getWeekDay(dateString: string): string {
  const date = new Date(dateString);
  return DAYS[date.getDay()];
}
