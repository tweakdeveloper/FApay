import React from "react";

interface RowProps {
  children: React.ReactNode;
}

function Row(props: RowProps) {
  return (
    <div className="flex flex-row justify-between items-center space-x-2">
      {props.children}
    </div>
  );
}

export default Row;
