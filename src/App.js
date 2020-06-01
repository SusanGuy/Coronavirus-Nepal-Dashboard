import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/home";
import AboutUs from "./containers/AboutUs/AboutUs";

import { initGA, PageView } from "./analytics";
import EssentialsContainer from "./containers/Essentials/Essentials";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Feed from "./containers/Feed/Feed";
import Charts from "./containers/Charts/Charts";
const App = () => {
  useEffect(() => {
    process.env.NODE_ENV !== "development" &&
      initGA(process.env.REACT_APP_TRACKING_ID);
    process.env.NODE_ENV !== "development" && PageView();
    if (localStorage.getItem("mode")) {
      setMode(JSON.parse(localStorage.getItem("mode")));
    }
  }, []);

  const [mode, setMode] = useState(true);
  return (
    <div className={`App ${!mode ? "" : "dark-mode"}`}>
      <Nav setMode={setMode} mode={mode} />
      <Switch>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/feed" exact component={() => <Feed mode={mode} />} />
        <Route path="/hospitals" exact component={EssentialsContainer} />
        <Route path="/charts" exact component={Charts}></Route>
        <Route path="/" component={() => <Home mode={mode}></Home>} />
      </Switch>
     
    </div>
  );
};

export default App;
