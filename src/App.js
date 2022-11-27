import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from "react";
import Menu from "./components/molecules/Menu";


import Login from "./components/pages/login/Login";
import Planos from "./components/pages/planos/Planos";
import Cadastro from "./components/pages/cadastro/Cadastro";
import AddressForm from "./components/pages/comprar/Comprar";


import "./components/molecules/menu.css";
import "./components/pages/login/style/login.css";
import "./components/pages/planos/style/planos.css";
import "./components/pages/cadastro/cadastro.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/planos" element={<Planos />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/comprar" element={<AddressForm />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;