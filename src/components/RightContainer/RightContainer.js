import React, { useState } from "react";
import MainTable from "../MainTable/MainTable";
import Tabs from "../Tabs/Tabs";
import Municipality from "../Municipality/Municipality";
import Search from "../Search/Search";
const RightContainer = (props) => {
  const [selectType, setSelectType] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="home-right">
      <Tabs selectType={selectType} setSelectType={setSelectType} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MainTable {...props} search={searchValue} type={selectType} />
      <Municipality />
    </div>
  );
};

export default RightContainer;
