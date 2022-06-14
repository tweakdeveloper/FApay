interface IndicatorProps {
  className?: string;
  label: string;
  value: string;
  withDisclaimer?: boolean;
}

function Indicator(props: IndicatorProps) {
  const withDisclaimer = props.withDisclaimer ?? false;
  return (
    <div className={"inline-block text-center " + props.className ?? ""}>
      <h3 className="font-thin">
        {props.label}
        <span className="text-red-500">{withDisclaimer ? "*" : ""}</span>
      </h3>
      <h2 className="font-bold">{props.value}</h2>
    </div>
  );
}

export default Indicator;
