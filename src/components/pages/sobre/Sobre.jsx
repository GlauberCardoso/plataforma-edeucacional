import React from "react";
import Background from "../../atoms/Background";
import Menu from "../../molecules/Menu";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Footer from '../../molecules/Footer';

export default function Sobre() {
  return (
    <>
    <React.Fragment>
    <CssBaseline />
    <Menu />
    <Background/>
    <Container fixed>
      <Box mt={5} sx={{ bgcolor: 'white', height: '80vh', borderRadius:'3%'}} />
      <h3
        style={{
        zIndex: "20",
        position: "absolute",
        marginTop: "-430px",
        maxWidth: "1000px"}}
      > Quem somos?</h3>
      
    </Container>
    
  </React.Fragment>
  <Footer />
  </>
);
}
