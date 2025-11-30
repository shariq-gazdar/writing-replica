import { capitalizeAll } from "@/lib/helpers";
import React from "react";

function RoundedContainer({
  children,
  borderColor = "#000",
  textColor = "#000",
  fontSize = 12,
  className,
  capitalize = true,
}) {
  return (
    <h6
      className={`border-2  px-[25px] py-[10px] rounded-3xl w-fit bg-transparent ${className} `}
      style={{
        borderColor: borderColor,
        color: textColor,
        fontSize: fontSize,
      }}
    >
      {capitalize ? capitalizeAll(children) : children}
    </h6>
  );
}

export default RoundedContainer;
