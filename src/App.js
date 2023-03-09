import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from "react";


import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Planos from "./components/pages/planos/Planos";
import Cadastro from "./components/pages/cadastro/Cadastro";
import Comprar from "./components/pages/comprar/Comprar";
import Sobre from "./components/pages/sobre/Sobre";


import HomeTwo from "./components-learning/pages/HomeTwo";
import Basico from "./components-learning/pages/basico/Basico";
import Intermediario from "./components-learning/pages/intermediario/Intermediario";
import Avancado from "./components-learning/pages/avancado/Avancado";



import "./components/molecules/menu.css";
import "./components/pages/home/style/home.css";
import "./components/pages/home/style/media-queries.css";
import "./components/pages/planos/style/planos.css";
import "./components/pages/cadastro/cadastro.css";
import "./components-learning/molecules/css/submenu.css";
import "./components-learning/molecules/css/curso-name.css";
import "./components-learning/molecules/css/modules.css";
import "./components-learning/molecules/css/modules-card.css";
import "./components-learning/molecules/css/progress.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/planos" element={<Planos />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/comprar" element={<Comprar  />} />
        <Route path="/sobre" element={<Sobre />}/>

        
        <Route path="/aprendizado" element={<HomeTwo />}/>
        <Route path="/basico" element={<Basico />}/>
        <Route path="/intermediario" element={<Intermediario />}/>
        <Route path="/avancado" element={<Avancado />}/>

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;