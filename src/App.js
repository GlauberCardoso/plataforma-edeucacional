import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from "react";
import Menu from "./components/molecules/Menu";


import Login from "./components/pages/login/Login";
import Planos from "./components/pages/planos/Planos";


import "./components/molecules/menu.css";
import "./components/pages/login/style/login.css";
import "./components/pages/planos/style/planos.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/planos" element={<Planos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;