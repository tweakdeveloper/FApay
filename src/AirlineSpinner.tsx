import React from "react";

interface Airline {
  code: string;
  name: string;
}

interface AirlineSpinnerProps {
  airlines: Airline[];
  onAirlineChanged(code: string): void;
}

function AirlineSpinner(props: AirlineSpinnerProps) {
  const [airline, setAirline] = React.useState("MQ");
  return (
    <select
      className="p-1 rounded w-full"
      onChange={(evt) => {
        setAirline(evt.target.value);
        props.onAirlineChanged(evt.target.value);
      }}
      value={airline}
    >
      {props.airlines.map((airline) => (
        <option key={airline.code} value={airline.code}>
          {airline.name}
        </option>
      ))}
    </select>
  );
}

export default AirlineSpinner;
