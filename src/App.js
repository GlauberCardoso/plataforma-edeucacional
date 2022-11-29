import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from "react";


import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Planos from "./components/pages/planos/Planos";
import Cadastro from "./components/pages/cadastro/Cadastro";
import Comprar from "./components/pages/comprar/Comprar";
import Sobre from "./components/pages/sobre/Sobre";


import "./components/molecules/menu.css";
import "./components/pages/home/style/home.css";
import "./components/pages/planos/style/planos.css";
import "./components/pages/cadastro/cadastro.css";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/planos" element={<Planos />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/comprar" element={<Comprar />}/>
        <Route path="/sobre" element={<Sobre />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;