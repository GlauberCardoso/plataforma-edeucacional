import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

import background from "./style/backgroundmedium.jpg";
import Menu from "../../molecules/Menu";
import styled from "styled-components";

import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../cadastro/UserPool";
import Redireciona from "../../molecules/RedirecionaLearning"


const theme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  
  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        setOpenDialog(true)
      
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
        alert("Usuário ou senha inválidos!");
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };

  const Title = styled.h1`
    color: #171846;
    font-size: 40px;
    font-weight: 500;
  `;

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={theme}>
     
      <Menu />
      <Redireciona open={openDialog} handleClose={handleClose} />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 15,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h3" variant="h4" sx={{ marginTop: 8 }}>
              <Title>Login</Title>
            </Typography>
            <Box component="form" noValidate sx={{ mt: 5 }} onSubmit={onSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="button-cadastro nav-link"
              >
                {"LOGIN"}
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    className="link-acesso-cadastro"
                  >
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/cadastro"
                    variant="body2"
                    className="link-acesso-cadastro"
                  >
                    {"Cadastra-se"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}
