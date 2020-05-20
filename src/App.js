import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState(false);
  return (
    <div className={`App ${mode ? "" : "dark-mode"}`}>
      <Nav setMode={setMode} mode={mode} />
      <Switch>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
