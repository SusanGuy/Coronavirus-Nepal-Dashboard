import React, { useState } from "react";
import MainTable from "../MainTable/MainTable";
import Tabs from "../Tabs/Tabs";
import Search from "../Search/Search";
const RightContainer = () => {
  const [selectType, setSelectType] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="home-right">
      <Tabs selectType={selectType} setSelectType={setSelectType} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MainTable search={searchValue} type={selectType} />
    </div>
  );
};

export default RightContainer;
