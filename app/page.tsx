import { getForecast } from "@/api/forecast";
import { getCurrentCoordinates } from "@/api/location";
import {
  DailyForecast,
  Header,
  HourlyForecast,
  Search,
  TodayCard,
  TodayDetails,
} from "@/components/layout";
import { getQueryClient } from "./get-query-client";

export default async function Home() {
  const currCoord = await getCurrentCoordinates();

  const queryClient = getQueryClient();
  await queryClient.query({
    queryKey: [
      "forecast",
      {
        lat: currCoord.latitude,
        lon: currCoord.longitude,
      },
    ],
    queryFn: () =>
      getForecast({
        latitude: currCoord.latitude,
        longitude: currCoord.longitude,
      }),
  });

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="container flex w-full flex-1 flex-col p-4 md:py-8">
        <Header />

        <h1 className="text-center text-5xl">
          How&apos;s the sky looking today?
        </h1>

        <Search />

        {/* Main Content */}
        <div className="mt-10 grid h-full flex-1 grid-cols-1 gap-6 md:grid-cols-6">
          {/* Left Column */}
          <section className="col-span-1 flex h-full flex-col gap-6 md:col-span-4">
            <TodayCard coord={currCoord} />
            <TodayDetails coord={currCoord} />
            <DailyForecast coord={currCoord} />
          </section>

          {/* Right Column */}
          <section className="col-span-1 flex h-full flex-col gap-6 md:col-span-2">
            <HourlyForecast />
          </section>
        </div>
      </main>
    </div>
  );
}
