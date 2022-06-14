import React from "react";

import AirlineSpinner from "./AirlineSpinner";
import Indicator from "./Indicator";
import Row from "./Row";

import airlines from "./data.json";

function formatPay(pay: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(pay);
}

function App() {
  const [currentAirline, setCurrentAirline] = React.useState("MQ");
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
