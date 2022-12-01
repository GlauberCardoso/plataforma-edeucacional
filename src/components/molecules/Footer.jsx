import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
background-color: rgb(23, 24, 70);
color: white;
text-align: center;
padding: 0.5rem 0rem;
position: relative;
margin-bottom: 0rem;
margin-top: 5rem;
`;

const Git = styled.a`
text-decoration: none;
color: white;
`

export default function Footer() {
  return (
    <FooterStyle>
      <div>
      Aplicação desenvolvida por{" "}
      <Git href="https://github.com/GlauberCardoso">Glauber</Git> e{" "}
      <Git href="https://github.com/JessanyKaline">Jessany</Git> {" "}
       - Projeto da Escola{" "}
      <Git href="https://http://somostera.com/">TERA</Git> - Plataforma Educacional.
      </div>
    </FooterStyle>
  );
}


