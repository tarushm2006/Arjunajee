import React from "react";
import "./style.css";
import Header from "./components/Header.js";
import { Route , Routes } from "react-router-dom";
import Physics from "./components/physics.js";
import Home from "./components/Homepage.js";
import InterLs1 from "./components/physics/Interls1.js";
import Ls1 from "./components/physics/ls1.js";
import Ls1Notes from "./components/physics/ls1Notes.js";
import Ls1Back from "./components/physics/ls1back.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/physics/ls1" element={<InterLs1 />} />
        <Route path="/physics/ls1/lectures" element={<Ls1 />} />
        <Route path="/physics/ls1/notes" element={<Ls1Notes />} />
        <Route path="/physics/ls1/backlog" element={<Ls1Back />} />
      </Routes>
    </div>
  );
}
