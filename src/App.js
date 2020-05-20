import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./containers/home";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  const [mode, setMode] = useState(false);
  return (
    <div className={`App ${mode ? "" : "dark-mode"}`}>
      <Nav setMode={setMode} mode={mode} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
