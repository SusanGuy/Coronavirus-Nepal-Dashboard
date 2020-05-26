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
  let zDai = 10;
  const [hover, setHover] = useState(false);
  if (province === hoveredProvince || selectType === 1 && hover) {
    zDai = 2000
  }

  return (
    <path
      id="_x34_583251_1_"
      fill={
        selectType === 1 && color
          ? color
          : selectType === 2 && color
            ? color
            : "#ddd"
      }
      fillOpacity="0.7"
      stroke={
        (selectType === 1 && hover) || province === hoveredProvince ? "#ff14f7" : "#000"
      }


      strokeOpacity={selectType === 1 ? 1 : province === hoveredProvince ? 1 : 0}
      strokeWidth={province === hoveredProvince || selectType === 1 && hover ? 7 : 1}
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
