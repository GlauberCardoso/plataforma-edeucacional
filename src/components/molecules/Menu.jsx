
import React from "react";

import { Link } from "react-router-dom";





import LogoFundoAzul  from "../../assets/logo/logo-fundo-azul.PNG"




export default function Menu() {
  return (
  
    <header>

        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" ><img class="d-flex logo img-fluid" src={LogoFundoAzul} alt="logo" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/planos" class="nav-link" aria-current="page">Planos</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/sobre" class="nav-link" >Sobre</Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" >Depoimentos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contato">Contato</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#faq">FAQ</a>
                  </li>
                  <li class="nav-item">
                    <Link to="login" class="nav-link acessar" >ACESSAR</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

    </header>
    
  )
}


