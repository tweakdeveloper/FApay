import React from "react";

import { ArrowRightIcon, PlusIcon, XIcon } from "@heroicons/react/outline";

import AirlineSpinner from "./AirlineSpinner";
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
  const monthlyPay = React.useMemo(() => {
    const airline = airlines.filter(
      (airline) => airline.code === currentAirline,
    )[0];
    const hourly = airline.pay;
    const guarantee = airline.guarantee;
    return hourly * guarantee;
  }, [currentAirline]);
  return (
    <div className="flex flex-col space-y-4 w-full lg:w-1/3 lg:mx-auto xl:w-1/4">
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
      <Row>
        <PlusIcon className="h-6 w-6" />
      </Row>
      <Row>
        <Indicator
          label="Per Diem"
          value={formatPay(
            airlines.filter((airline) => airline.code === currentAirline)[0]
              .perdiem,
          )}
        />
      </Row>
    </div>
  );
}

export default App;
