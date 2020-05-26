import React from "react";

const Province = ({ province, val }) => {
  return (
    <path
      className={`state-boundary ${province}`}
      strokeMiterlimit="3.8637"
      d={val}
      id="path4045"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="#000"
      fillRule="evenodd"
      fill="none"
    />
  );
};

export default Province;
