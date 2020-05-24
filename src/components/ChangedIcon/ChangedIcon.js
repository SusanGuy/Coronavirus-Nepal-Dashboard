import React from "react";
import * as Icon from "react-feather";
const ChangedIcon = ({ data, mama }) => {
  return (
    <span className={`delta ${mama}`}>
      <Icon.ArrowUp />
      {data}
    </span>
  );
};

export default ChangedIcon;
