import React from "react";
import Background from "../../atoms/Background";
import Menu from "../../molecules/Menu";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Footer from "../../molecules/Footer";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: white;
  font-weight: 600;
  text-shadow: black 0.2em 0.2em 0.2em;
`;

const Paragraph = styled.p`
  font-size: 1.3em;
  color: white;
  font-weight: 500;
  text-shadow: black 0.2em 0.2em 0.2em;
`;

export default function Sobre() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Background />
        <Menu />

        <Container fixed>
          <Box
            mt={5}
            sx={{
              marginTop: "5.5em",
              height: "80vh",
              borderRadius: "3%",
              padding: "2rem",
            }}
          >
            <div>
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
            </div>
          </Box>
        </Container>
      </React.Fragment>
      <Footer />
    </>
  );
}
