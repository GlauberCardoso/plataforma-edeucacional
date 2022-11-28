import React from "react";
import {Link} from 'react-router-dom';
import Menu from "../../molecules/Menu";

import video from "../../../assets/videos/video-body.mp4";

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
    </>
  );
}