import React from "react";

import Menu from "../../molecules/Menu";

import video from "../../../assets/videos/video-body.mp4";

export default function Home() {
  return (
    <>
      <Menu />

      <section>
        <div className="video-banner">
          <video src={video} type="video/mp4" width="750" height="500">
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
              <a href="formulário-cadastro/formulario.html">
                <p>Cadastre-se</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
