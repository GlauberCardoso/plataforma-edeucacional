import React from "react";
import Menu from "../../molecules/Menu";

import { Link } from "react-router-dom";
import Footer from "../../molecules/Footer";

export default function Planos() {
  return (
    <>
      <Menu />

      <div class="position-relative overflow-hidden p-5 p-md-5 m-md-3 text-center div-intercambio">
        <div class="intercambio col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal textos">Intercâmbio</h1>
          <p class="lead fw-normal textos paragrafos">
            Escolha o Pais e nós cuidamos de toda a burocracia.enjoy this
            experience!24x sem juros
          </p>
          <a href="../intercambio.html">
            <button type="button" class="btn btn-primary">
              SAIBA MAIS
            </button>
          </a>
        </div>
      </div>

      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="div-avancado me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5 textos">Plano Avançado</h2>
            <p class="lead textos paragrafos">
              Comprando esse plano o acesso é liberado para todos os cursos da
              plataforma. Live your dreams! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Incidunt adipisci provident,
              accusamus eveniet inventore at delectus culpa dolorem alias? Aut
              soluta architecto deleniti ratione distinctio delectus, enim amet
              expedita asperiores.
            </p>
          </div>
          <Link to="/comprar">
            {" "}
            <div class="img-avancado shadow-sm mx-auto"></div>
          </Link>
        </div>
        <div class="div-intermediario me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5 textos">Plano Intermediário</h2>
            <p class="lead textos paragrafos">
              Adquire e ganhe acesso gratuito ao módulo básico para relembrar
              conceitos sempre que precisar. Let's Go! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Repellendus voluptate natus ad
              quibusdam voluptas nostrum ipsa. Maiores amet hic deserunt aliquam
              molestias, libero sint veniam? Iusto voluptate consequatur
              reiciendis omnis.
            </p>
          </div>
          <Link to="/comprar">
            <div class="img-intermediario shadow-sm mx-auto"></div>
          </Link>
        </div>
      </div>

      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="div-basico me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          ={" "}
          <div class="my-3 p-6">
            <h2 class="display-5 textos">Plano Básico</h2>
            <p class="lead textos paragrafos">
              Comece agora e concorra a bolsas de estudos exclusivas e
              personalizadas. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Explicabo, rerum. Voluptatibus nesciunt totam ut. Cupiditate
              provident obcaecati natus. Error praesentium enim corporis porro
              quasi. Quibusdam inventore adipisci ab. Placeat, voluptatum?
            </p>
          </div>
        </div>
        
      </div>
      <div>
      <Footer />
      </div>
    </>
  );
}
