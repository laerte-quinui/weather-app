"use client";

import bgLarge from "@/public/images/bg-today-large.svg";
import bgSmall from "@/public/images/bg-today-small.svg";
import Sunny from "@/public/images/icon-sunny.webp";
import Image from "next/image";

const TodayCard = () => {
  return (
    <div className="relative flex h-full min-h-fit w-full flex-[fit-content] flex-col items-center justify-between gap-4 overflow-hidden rounded-xl bg-blue-500 p-6 md:flex-1 md:flex-row">
      {/* Location */}
      <div className="z-1 flex h-fit flex-col gap-2 text-center md:text-start">
        <p className="text-2xl font-semibold">City, Country</p>
        <p className="font-light text-neutral-200">Week day, Month day, Year</p>
      </div>

      {/* Weather */}
      <div className="z-1 flex h-fit items-center gap-2">
        <Image
          src={Sunny}
          alt="Sunny weather icon"
          className="size-22 md:size-32"
        />
        <p className="text-6xl font-semibold italic lg:text-8xl">0º</p>
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-xl">
        <Image
          fill
          src={bgLarge}
          alt="Overview card background"
          className="hidden h-full w-full object-cover object-center md:block"
        />

        <Image
          fill
          src={bgSmall}
          alt="Overview card background"
          className="block h-full w-full object-cover object-center md:hidden"
        />
      </div>
    </div>
  );
};

export default TodayCard;
