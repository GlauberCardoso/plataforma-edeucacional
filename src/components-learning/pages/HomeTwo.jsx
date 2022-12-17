import React from "react";
import MenuLearning from "../molecules/MenuLearning";
import CardBasic from "../molecules/CardsInitial";
import CardIntermediary from "../molecules/CardIntermediary";
import CardAdvanced from "../molecules/CardAdvanced";
import Footer from "../../components/molecules/Footer";
import styled from "styled-components";

const DivStyle = styled.div`

display: flex;
justify-content: space-around; 
margin: 2rem;

@media screen and (min-width: 281px) and (max-width: 440px){
  flex-direction:column;
  margin: 2em;
  
}
`;

const DivStyleTwo = styled.div`
display: flex;
justify-content:flex-start;
padding:1rem;
margin-top: 7rem;


`

export default function Home() {
  return (
    <>
      <MenuLearning />
      <DivStyleTwo>
        <h3>OLÁ ALUNO (A), <strong>SEUS CURSOS</strong></h3>
      </DivStyleTwo>
      <DivStyle>
      <CardBasic/>
      <CardIntermediary/>
      <CardAdvanced/>
      </DivStyle>
      <Footer/>
    </>
  );
}
