import React from "react";
import Menu from "../../molecules/Menu";

import {Link} from 'react-router-dom';


export default function Planos() {
  return (
     <>
    <Menu />
    
      <div class="position-relative overflow-hidden p-5 p-md-5 m-md-3 text-center div-intercambio">
        <div class="intercambio col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Intercâmbio</h1>
          <p class="lead fw-normal">
            <Link to="/comprar">Escolha o Pais e nós cuidamos de toda a burocracia.enjoy this
            experience!24x sem juros</Link>
          </p>
          <a href="../intercambio.html">
            <button type="button" class="btn btn-primary">
              Saiba Mais
            </button>
          </a>
        </div>
      </div>

      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="div-avancado me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Plano Avançado</h2>
            <p class="lead">
              Comprando esse plano o acesso é liberado para todos os cursos da
              plataforma. Live your dreams!
            </p>
            
          </div>
          <div class="img-avancado shadow-sm mx-auto"></div>
        </div>
        <div class="div-intermediario me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Plano Intermediário</h2>
            <p class="lead">
              Adquire e ganhe acesso gratuito ao módulo básico para relembrar
              conceitos sempre que precisar. Let's Go!
            </p>
           
          </div>
          <div class="img-intermediario shadow-sm mx-auto"></div>
        </div>
      </div>

      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="div-basico me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Plano Básico</h2>
            <p class="lead">
              Comece agora e concorra a bolsas de estudos exclusivas e
              personalizadas.
            </p>
            
          </div>
          
        </div>
      </div>
    
    </>
  );
}
