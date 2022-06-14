import React from "react";

import AirlineSpinner from "./AirlineSpinner";

import airlines from "./data.json";

function App() {
  const [airline, setAirline] = React.useState("MQ");
  return (
    <div className="flex flex-col space-y-4 w-full lg:w-1/3 lg:mx-auto xl:w-1/4">
      <h1 className="text-3xl text-center">FApay</h1>
      <AirlineSpinner
        airlines={airlines}
        onAirlineChanged={(code: string) => setAirline(code)}
      />
    </div>
  );
}

export default App;
