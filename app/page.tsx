import { Header, Search } from "@/components/layout";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="container flex w-full flex-1 flex-col p-4 md:py-8">
        <Header />

        <h1 className="text-center text-5xl">
          How&apos;s the sky looking today?
        </h1>

        <Search />
      </main>
    </div>
  );
}
