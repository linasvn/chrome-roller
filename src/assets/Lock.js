import React from "react";

function Icon(props) {
  return (
    <svg
    {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill="#392928"
        fillOpacity="0.75"
        fillRule="evenodd"
        d="M4.586 2.086A2 2 0 018 3.5V5H4V3.5a2 2 0 01.586-1.414zM3 5V3.5a3 3 0 116 0V5h.5A1.5 1.5 0 0111 6.5V10a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 011 10V6.5A1.5 1.5 0 012.5 5H3zm5.5 1h-6a.5.5 0 00-.5.5V10a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V6.5a.5.5 0 00-.5-.5h-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
