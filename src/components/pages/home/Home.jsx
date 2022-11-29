import React from "react";
import {Link} from 'react-router-dom';
import Menu from "../../molecules/Menu";


import video from "../../../assets/videos/video-body.mp4";
import dep1 from "../../../assets/img/depoimentos/dep1.png";
import dep2 from "../../../assets/img/depoimentos/dep2.png";
import dep3 from "../../../assets/img/depoimentos/dep3.png";
import dep4 from "../../../assets/img/depoimentos/dep4.png";
import dep5 from "../../../assets/img/depoimentos/dep5.png";
import dep6 from "../../../assets/img/depoimentos/dep6.png";

export default function Home() {
  return (
    <>
      <Menu />
      
      <section>
        <div className="video-banner">
            <video width="100%" height="800px" autoPlay muted preload="auto" loop>
              <source src={video} type="video/mp4" />
            </video>
          <div
            className="marketing-description"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <h1 className="marketing-titulo">
              MGM English Online. <br />
              Estude de onde estiver, 100% Digital.
            </h1>
            <p className="marketing-subtitulo">
              Com a MGM English você pode mais. <br />
              Estude no seu ritmo.
            </p>
            <div className="video-banner cadastre-se">
              <Link to="/cadastro">
                <p>Cadastre-se</p>
                </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos">
      <h1 id="dep" data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">Depoimentos</h1>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={dep1} class="d-block" alt="Depoimentos"/>
          </div>
          <div class="carousel-item">
            <img src={dep2} class="d-block" alt="Depoimentos"/>
          </div>
          <div class="carousel-item">
            <img src={dep3} class="d-block" alt="Depoimentos"/>
          </div>
          <div class="carousel-item">
            <img src={dep4} class="d-block" alt="Depoimentos"/>
          </div>
          <div class="carousel-item">
            <img src={dep5} class="d-block" alt="Depoimentos"/>
          </div>
          <div class="carousel-item">
            <img src={dep6} class="d-block" alt="Depoimentos"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    </>
  );
}