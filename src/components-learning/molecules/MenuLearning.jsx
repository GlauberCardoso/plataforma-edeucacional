import React from "react";
import { Link } from "react-router-dom";
import LogoFundoAzul from "../../assets/logo/logo-fundo-azul.jpeg";

export default function Menu() {
  return (
      <header>
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">
              <img
                class="d-flex logo img-fluid"
                src={LogoFundoAzul}
                alt="logo"
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
                  <Link to="/" class="nav-link" aria-current="page">
                    Ajuda
                  </Link>
                </li>
                
                <li class="nav-item">
                  <Link to="/" class="nav-link">
                    Sair
                  </Link>
                </li>
                
             
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
}
