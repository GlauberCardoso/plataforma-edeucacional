import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from "react";
import Menu from "./components/molecules/Menu"

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;