import React from "react";

interface RowProps {
  children: React.ReactNode;
}

function Row(props: RowProps) {
  return (
    <div className="flex flex-row justify-evenly items-center">
      {props.children}
    </div>
  );
}

export default Row;
