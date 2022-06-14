import React from "react";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/outline";

import AirlineSpinner from "./AirlineSpinner";
import Col from "./Col";
import Indicator from "./Indicator";
import Row from "./Row";

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
    <div className="px-4 py-3 flex flex-col justify-start items-stretch space-y-4 w-full lg:w-1/2 lg:mx-auto xl:w-1/3">
      <h1 className="text-3xl text-center">FApay</h1>
      <AirlineSpinner
        airlines={airlines}
        onAirlineChanged={(code: string) => setCurrentAirline(code)}
      />
      <Row>
        <Indicator
          label="Hourly"
          value={formatPay(
            airlines.filter((airline) => airline.code === currentAirline)[0]
              .pay,
          )}
        />
        <XIcon className="h-6 w-6" />
        <Indicator
          label="Guarantee"
          value={`${
            airlines.filter((airline) => airline.code === currentAirline)[0]
              .guarantee
          } hours`}
        />
        <ArrowRightIcon className="h-6 w-6" />
        <Indicator label="Monthly Pay" value={formatPay(monthlyPay)} />
      </Row>
      <PlusIcon className="h-6 w-6 self-center" />
      <Row>
        <Indicator
          label="Per Diem"
          value={formatPay(
            airlines.filter((airline) => airline.code === currentAirline)[0]
              .perdiem,
          )}
        />
        <XIcon className="h-6 w-6" />
        <Indicator label="Assumed Per Diem" value="312" withDisclaimer />
        <ArrowRightIcon className="h-6 w-6" />
        <Indicator label="Monthly Per Diem" value={formatPay(monthlyPerDiem)} />
      </Row>
      <Col className="self-end">
        <ArrowDownIcon className="h-6 w-6 self-center" />
        <Indicator label="Monthly Total" value={formatPay(monthlyTotal)} />
      </Col>
    </div>
  );
}

export default App;
