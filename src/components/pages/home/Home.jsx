import React from "react";
import {Link} from 'react-router-dom';
import Menu from "../../molecules/Menu";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Footer from "../../molecules/Footer";


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
      
      <section className="video">
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
              Com a MGM English você pode muito mais. <br />
              Estude no seu ritmo!
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

    <section id="faq">
      <h1 data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">Perguntas Frequentes</h1>
      <div class="accordion" id="accordionExample">

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Como funcionam os Planos da MGM Online?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Preciso seguir uma ordem específica do curso?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Quais são as formas de pagamento disponíveis?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Qual é a duração do curso?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Como funciona o Intercâmbio?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="contact" data-aos="fade-up"
      data-aos-anchor="#example-anchor"
      data-aos-offset="300"
      data-aos-duration="3000">
        <h1 data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Entrar em Contato!</h1>
        <h2>Gostaríamos de ajudá-lo a iniciar sua jornada com a MGM Online.</h2>
        <form action="" method="post">
            <TextField id="outlined-basic" label="Nome Completo" variant="outlined" required size="small" />
            <p></p>

            <TextField id="outlined-basic" label="Email" variant="outlined" required size="small" />
            <p></p>

            <TextField id="outlined-basic" label="País" variant="outlined" required size="small" />
            <p></p>

            <TextareaAutosize
              id="outlined-basic"
              aria-label="empty textarea"
              placeholder="   Mensagem..."
              style={{ width: 530 , height: 200}}
            />
            <p></p>

            <label for="itemselect">Como você ficou sabendo sobre nós?</label>
            <p>
                <select name="item" id="itemselect">
                    <option value="Select">- Selecione -</option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Youtube">Youtube</option>
                    <option value="A/P">Agência/Parceiro</option>
                    <option value="A/C">Amigo/Colega</option>
                    <option value="Outros">Outros</option>
                </select>
            </p>
            <p>
                <div class="checkbox">
                  <input type="checkbox" name="check" id="termo-privacidade" required />
                  <label for="termo-privacidade">Li e concordo com a <Link to="/">Termos e Condições</Link> e <Link to="/">Política de Privacidade</Link></label><br/>
                </div>
            </p>
            <p></p>
                <div class="enviar-formulario">
                    <button type="submit">Enviar</button>
                </div>
        </form>
    </section>
    <Footer />
    </>
  );
}