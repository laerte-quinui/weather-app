import {
  DailyForecast,
  Header,
  HourlyForecast,
  Search,
  TodayCard,
  TodayDetails,
} from "@/components/layout";

export default function Home() {
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
            <TodayCard />
            <TodayDetails />
            <DailyForecast />
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
