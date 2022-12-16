import React from "react";

import Menu from "../../molecules/Menu";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../../molecules/Footer";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #171846;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1.3em;
  color: #171846;
  font-weight: 500;
  padding: 1em;
`;

const DivStyle = styled.div`
   margin-top: 17vh;
`;


export default function Sobre() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />

        

          <Menu />
          <Container fixed>
          
         
              <DivStyle>
              <Title>Missão</Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci labore voluptatum quas fugit fugiat libero accusamus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, est molestiae perferendis quidem facilis distinctio?
                Numquam quaerat dolores ducimus? Iste at in officiis repellat
                officia voluptatum doloremque illo velit quos.
              </Paragraph>
              <Title>Visão</Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci labore voluptatum quas fugit fugiat libero accusamus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste quae sunt illo? Dolorum asperiores exercitationem sequi.
                Excepturi atque, ipsa ratione quia inventore qui, ab doloremque
                nulla nihil iusto consectetur!
              </Paragraph>
              <Title>Valores</Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci labore voluptatum quas fugit fugiat libero accusamus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                commodi voluptatibus corporis dolorum expedita totam aut. Soluta
                nulla dolor, saepe repellat animi modi doloribus, perferendis
                culpa consequatur, architecto ut dolorem!
              </Paragraph>
            
              </DivStyle>     
        </Container>
        
      </React.Fragment>
     <DivStyle>
     <Footer />
     </DivStyle>
    </>
  );
}
