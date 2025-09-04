import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;