interface ColProps {
  children: React.ReactNode;
  className?: string;
}

function Col(props: ColProps) {
  return (
    <div
      className={
        "flex flex-col justify-start items-center space-y-2 " +
          props.className ?? ""
      }
    >
      {props.children}
    </div>
  );
}

export default Col;
