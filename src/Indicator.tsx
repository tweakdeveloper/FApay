interface IndicatorProps {
  label: string;
  value: string;
}

function Indicator(props: IndicatorProps) {
  return (
    <div className="inline-block text-center">
      <h3 className="font-thin">{props.label}</h3>
      <h2 className="font-bold">{props.value}</h2>
    </div>
  );
}

export default Indicator;
