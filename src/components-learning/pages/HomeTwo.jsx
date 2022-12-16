import React from "react";
import MenuLearning from "../molecules/MenuLearning";
import CardBasic from "../molecules/CardsInitial";
import CardIntermediary from "../molecules/CardIntermediary";
import CardAdvanced from "../molecules/CardAdvanced";
import Footer from "../../components/molecules/Footer";
import styled from "styled-components";

const DivStile = styled.div`

display: flex;
justify-content: space-around; 
margin-top: 20vh;
`;


export default function Home() {
  return (
    <>
      <MenuLearning />
      <DivStile>
      <CardBasic/>
      <CardIntermediary/>
      <CardAdvanced/>
      </DivStile>
      <Footer/>
    </>
  );
}
