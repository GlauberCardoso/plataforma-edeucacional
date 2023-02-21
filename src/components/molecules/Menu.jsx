import React from "react";

import { Link } from "react-router-dom";

import LogoFundoAzul from "../../assets/logo/logo-fundo-azul.jpeg";

import ScrollUp from "../pages/home/js/ScrollUp";
import ScrollDepoimentos from "../pages/home/js/ScrollDepoimentos";
import ScrollFaq from "../pages/home/js/ScrollFaq";
import ScrollContato from "../pages/home/js/ScrollContato";

export default function Menu() {
  return (
      <header>
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container-fluid">
            <Link class="navbar-brand">
              <img
                class="d-flex logo img-fluid"
                src={LogoFundoAzul}
                alt="logo"
                onClick={ScrollUp}
              />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link 
                    to="/" 
                    onClick={ScrollUp}
                    class="nav-link" 
                    aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/planos" class="nav-link" aria-current="page">
                    Planos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/sobre" class="nav-link">
                    Sobre
                  </Link>
                </li>
                <li class="nav-item">
                  <Link 
                    to="/"
                    onClick={ScrollDepoimentos}
                    class="nav-link"
                  >
                    Depoimentos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link 
                    to="/"
                    onClick={ScrollFaq}
                    class="nav-link"
                  >
                    FAQ
                  </Link>
                </li>
                <li class="nav-item">
                  <Link 
                    to="/"
                    onClick={ScrollContato}
                    class="nav-link"
                  >
                    Contato
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/login" class="nav-link acessar">
                    ACESSAR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
}
