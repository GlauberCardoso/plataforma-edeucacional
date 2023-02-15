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
import styled from "styled-components";
import { Link } from "react-router-dom";

import UserPool from "./UserPool.js";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const theme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [numero, setNumero] = React.useState();
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

    const attributeFirstName = new CognitoUserAttribute({
      Name: "custom:firstName",
      Value: firstName,
    });

    const attributeLasttName = new CognitoUserAttribute({
      Name: "custom:lastName",
      Value: lastName,
    });

    const attributeCep = new CognitoUserAttribute({
      Name: "custom:cep",
      Value: cep,
    });

    const attributeNumero = new CognitoUserAttribute({
      Name: "custom:numero",
      Value: numero,
    });

    const attributeEndereco = new CognitoUserAttribute({
      Name: "custom:endereco",
      Value: endereco,
    });

    const attributeBairro = new CognitoUserAttribute({
      Name: "custom:bairro",
      Value: bairro,
    });

    const attributeCidade = new CognitoUserAttribute({
      Name: "custom:cidade",
      Value: cidade,
    });

    const attributeUf = new CognitoUserAttribute({
      Name: "custom:uf",
      Value: uf,
    });

    const attributeList = [
      attributeFirstName,
      attributeLasttName,
      attributeCep,
      attributeNumero,
      attributeEndereco,
      attributeBairro,
      attributeCidade,
      attributeUf,
    ];

    UserPool.signUp(
      email,
      password,
      attributeList,
      null,
      (err, data) => {
        if (err) {
          console.error(err);
        }else{
          alert("deu certo")
          window.location.href = "/login"
        }
        
      }
    );
  };

  const Title = styled.h1`
    color: #171846;
    font-size: 40px;
    font-weight: 500;
  `;

  const DivStyle = styled.div`
    margin-top: 17vh;
  `;

  return (
    <>
      <Menu />

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 11,
              marginBottom: 0,
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "white",
              height: "100vh",
            }}
          >
            <Typography variant="h4">
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
                    onChange={(event) => setFirstName(event.target.value)}
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
                    onChange={(event) => setLastName(event.target.value)}
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
                    onChange={(event) => setEmail(event.target.value)}
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
                    onChange={(event) => setPassword(event.target.value)}
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
                    onChange={(event) => setNumero(event.target.value)}
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
                    onChange={(event) => setEndereco(event.target.value)}
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
                    onChange={(event) => setBairro(event.target.value)}
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
                    onChange={(event) => setCidade(event.target.value)}
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
                    onChange={(event) => setUf(event.target.value)}
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
                  <Link
                    to="/login"
                    className="link-acesso-cadastro"
                    variant="string"
                  >
                    Já tem uma conta? Clique aqui
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <DivStyle>
        <Footer />
      </DivStyle>
    </>
  );
}
*/