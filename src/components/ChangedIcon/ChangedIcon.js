import React from "react";
import * as Icon from "react-feather";
const ChangedIcon = ({ data, mama }) => {
  return (
    <span className={`delta ${mama}`}>
      {data > 0 ? <Icon.ArrowUp /> : <Icon.ArrowDown />}
      {data < 0 ? data * -1 : data}
    </span>
  );
};

export default ChangedIcon;
