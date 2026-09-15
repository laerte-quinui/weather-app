"use client";

import Logo from "@/public/images/logo.svg";
import {
  GlobalUnit,
  PrecipitationUnit,
  TemperatureUnit,
  WindSpeedUnit,
} from "@/types";
import { Settings01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Header = () => {
  return (
    <header className="mb-10 flex w-full items-center justify-between gap-4">
      <Image
        src={Logo}
        alt="Weather App Logo"
        height={40}
        className="h-6 w-fit md:h-10"
        loading="eager"
      />

      <UnitsDropdown />
    </header>
  );
};

const UnitsDropdown = () => {
  const [globalUnit, setGlobalUnit] = useState<GlobalUnit>("metric");
  const [temperature, setTemperature] = useState<TemperatureUnit>("celsius");
  const [windSpeed, setWindSpeed] = useState<WindSpeedUnit>("km/h");
  const [precipitation, setPrecipitation] = useState<PrecipitationUnit>("mm");

  const handleGlobalUnitChange = () => {
    if (globalUnit === "metric") {
      setGlobalUnit("imperial");
      setTemperature("fahrenheit");
      setWindSpeed("mph");
      setPrecipitation("in");
    } else {
      setGlobalUnit("metric");
      setTemperature("celsius");
      setWindSpeed("km/h");
      setPrecipitation("mm");
    }
  };

  const groups = [
    {
      label: "Temperature",
      items: [
        { value: "celsius", label: "Celsius (°C)" },
        { value: "fahrenheit", label: "Fahrenheit (°F)" },
      ],
      value: temperature,
      onChange: setTemperature,
    },
    {
      label: "Wind Speed",
      items: [
        { value: "km/h", label: "km/h" },
        { value: "mph", label: "mph" },
      ],
      value: windSpeed,
      onChange: setWindSpeed,
    },
    {
      label: "Precipitation",
      items: [
        { value: "mm", label: "Millimeters (mm)" },
        { value: "in", label: "Inches (in)" },
      ],
      value: precipitation,
      onChange: setPrecipitation,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="surface" />}>
        <HugeiconsIcon
          icon={Settings01Icon}
          strokeWidth={2}
          className="transition-transform duration-600 group-data-popup-open:-rotate-180"
        />
        Units
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-40">
        <DropdownMenuItem onClick={handleGlobalUnitChange}>
          Switch to {globalUnit === "metric" ? "Imperial" : "Metric"}
        </DropdownMenuItem>

        {groups.map((group, index) => (
          <DropdownMenuGroup key={index}>
            <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={group.value}
              onValueChange={group.onChange}
            >
              {group.items.map((item, itemIndex) => (
                <DropdownMenuRadioItem value={item.value} key={itemIndex}>
                  {item.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>

            {index < groups.length - 1 && <DropdownMenuSeparator />}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
