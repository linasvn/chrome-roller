import React from "react";

function Icon(props) {
  return (
    <svg
    {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="12"
      fill="none"
      viewBox="0 0 13 12"
    >
      <path
        fill="#392928"
        fillRule="evenodd"
        d="M5.363 1.645A4.504 4.504 0 002.027 5.5h1.998a8.15 8.15 0 011.338-3.855zm2.274 0A8.15 8.15 0 018.975 5.5h1.998a4.504 4.504 0 00-3.336-3.855zM7.971 5.5A7.15 7.15 0 006.5 1.775 7.15 7.15 0 005.029 5.5H7.97zm-2.942 1H7.97A7.15 7.15 0 016.5 10.225 7.15 7.15 0 015.029 6.5zm-1.004 0H2.027a4.504 4.504 0 003.336 3.855A8.15 8.15 0 014.025 6.5zm3.612 3.855A8.15 8.15 0 008.975 6.5h1.998a4.504 4.504 0 01-3.336 3.855zM6.5 11.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
