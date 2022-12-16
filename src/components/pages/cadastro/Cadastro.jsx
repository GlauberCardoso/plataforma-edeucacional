import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from "../../molecules/Menu";

import Footer from "../../molecules/Footer";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const theme = createTheme();

export default function SignUp() {
  const [cep, setCep] = React.useState();
  const [endereco, setEndereco] = React.useState();
  const [bairro, setBairro] = React.useState();
  const [cidade, setCidade] = React.useState();
  const [uf, setUf] = React.useState();

  

  React.useEffect((props) => {
    fetch(`https:viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setEndereco(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUf(data.uf);
      });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

const Title = styled.h1`
  color: #171846;
  font-size: 40px;
  font-weight: 500;
`


  return (
    <>
      <Menu />
     
        <ThemeProvider theme={theme} >
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 11,
                marginBottom: 0,
                padding:2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor:'white',
                height: '100vh'
                
              }}
            >
              <Typography variant="h4" >
                <Title>Cadastre-se</Title>
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Nome"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Sobrenome"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="E-mail"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="cep"
                      label="Cep"
                      id="cep"
                      onBlur={(e) => setCep(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="numero"
                      label="Número"
                      type="number"
                      id="numero"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <OutlinedInput
                      required
                      fullWidth
                      name="endereco"
                      placeholder="Endereço"
                      type="adress"
                      id="endereco"
                      value={endereco}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <OutlinedInput
                      required
                      fullWidth
                      name="bairro"
                      placeholder="Bairro"
                      type="adress"
                      id="bairro"
                      value={bairro}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <OutlinedInput
                      required
                      fullWidth
                      name="cidade"
                      placeholder="Cidade"
                      type="adress"
                      id="cidade"
                      value={cidade}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <OutlinedInput
                      required
                      fullWidth
                      name="uf"
                      placeholder="UF"
                      type="adress"
                      id="uf"
                      value={uf}
                    />
                  </Grid>
                </Grid>
                <Button
                  className="button-cadastro"
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ mt: 4, mb: 3 }}
                >
                  Comece Agora
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" className="link-acesso-cadastro" variant="string">
                      Já tem uma conta? Clique aqui
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
          
        </ThemeProvider>
        <Footer/>
        
    </>
  );
}
