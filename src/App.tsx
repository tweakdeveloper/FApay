import React from "react";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/outline";

import AirlineSpinner from "./AirlineSpinner";
import Indicator from "./Indicator";

import airlines from "./assets/data.json";

function formatPay(pay: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(pay);
}

function App() {
  const [currentAirline, setCurrentAirline] = React.useState("MQ");
  const airline = airlines.filter(
    (airline) => airline.code === currentAirline,
  )[0];
  const monthlyPay = airline.pay * airline.guarantee;
  const monthlyPerDiem = airline.perdiem * 312;
  const monthlyTotal = monthlyPay + monthlyPerDiem;
  return (
    <div className="px-4 py-3 w-full lg:w-1/2 lg:mx-auto xl:w-1/3 grid gap-1 grid-cols-5 place-items-center">
      <h1 className="text-3xl text-center col-span-full">FApay</h1>
      <AirlineSpinner
        airlines={airlines}
        onAirlineChanged={(code: string) => setCurrentAirline(code)}
      />
      <Indicator label="Hourly" value={formatPay(airline.pay)} />
      <XIcon className="h-6 w-6" />
      <Indicator label="Guarantee" value={`${airline.guarantee} hours`} />
      <ArrowRightIcon className="h-6 w-6" />
      <Indicator label="Monthly Pay" value={formatPay(monthlyPay)} />
      <PlusIcon className="h-6 w-6 col-start-5 col-span-1" />
      <Indicator label="Per Diem" value={formatPay(airline.perdiem)} />
      <XIcon className="h-6 w-6" />
      <Indicator label="Assumed Per Diem" value="312" withDisclaimer />
      <ArrowRightIcon className="h-6 w-6" />
      <Indicator label="Monthly Per Diem" value={formatPay(monthlyPerDiem)} />
      <ArrowDownIcon className="h-6 w-6 col-start-5 col-span-1" />
      <Indicator
        label="Monthly Total"
        value={formatPay(monthlyTotal)}
        className="col-start-5 col-span-1"
      />
    </div>
  );
}

export default App;
