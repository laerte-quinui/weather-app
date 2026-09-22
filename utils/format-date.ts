export function getCurrentDate(): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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

  const date = new Date();
  const weekDay = days[date.getDay()];
  const month = months[date.getMonth()];
  const monthDay = date.getDate();
  const year = date.getFullYear();

  return `${weekDay}, ${month} ${monthDay}, ${year}`;
}
