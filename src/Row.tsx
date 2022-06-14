import React from "react";

interface RowProps {
  children: React.ReactNode;
}

function Row(props: RowProps) {
  return <div className="flex flex-row justify-evenly">{props.children}</div>;
}

export default Row;
