import airlines from "./data.json";

function AirlineSpinner() {
  return (
    <select className="p-1 rounded w-full">
      {airlines.map((airline) => (
        <option key={airline.code}>
          {airline.code} &mdash; {airline.name}
        </option>
      ))}
    </select>
  );
}

export default AirlineSpinner;
