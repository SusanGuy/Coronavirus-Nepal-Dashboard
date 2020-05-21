import React, { useState } from "react";

const District = ({
  district,
  province,
  symbol,
  val,
  selectType,
  hoveredProvince,
  hoveredDistrict,
  setHoveredDistrict,
  setHoveredProvince,
  color,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <path
      id="_x34_583251_1_"
      fill={
        (selectType === 1 && hover) || province === hoveredProvince
          ? "#ff14f7"
          : selectType === 1 && color
          ? color
          : selectType === 2 && color
          ? color
          : "#ddd"
      }
      stroke="#000"
      strokeOpacity={selectType === 1 ? "1" : "0"}
      strokeWidth="0.7"
      className={`district ${district} ${province} ${symbol}`}
      onMouseEnter={() => {
        if (selectType === 2) {
          setHoveredProvince(province);
        } else {
          setHover(true);
          setHoveredDistrict(district);
        }
      }}
      onMouseLeave={() => {
        if (selectType === 2) {
          setHoveredProvince("");
        } else {
          setHover(false);
          setHoveredDistrict("");
        }
      }}
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d={val}
    />
  );
};

export default District;
