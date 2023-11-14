import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={props}
    height={props}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={11} cy={11} r={11} fill="white" fillOpacity={0.5} />
    <path
      d="M11 4L17 10M11 4L5 10M11 4V18"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
