import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import { initGA, PageView } from "./analytics";

import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Feed from "./containers/Feed/Feed";
function App() {
  useEffect(() => {
    process.env.NODE_ENV !== "development" && initGA("UA-167235016-1");
    process.env.NODE_ENV !== "development" && PageView();
  }, []);
  const [mode, setMode] = useState(false);
  return (
    <div className={`App ${mode ? "" : "dark-mode"}`}>
      <Nav setMode={setMode} mode={mode} />
      <Switch>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
