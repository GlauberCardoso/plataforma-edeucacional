import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Menu from "../../molecules/Menu";


import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../molecules/Footer";
import styled from 'styled-components';


const theme = createTheme({
  palette: {
    primary: {
      main: "#171846",
    },
    secondary: {
      main: "#FF7D00",
    },
  },
});

const tiers = [
  {
    title: "Básico",
    price: "70",
    description: [
      "Vídeo-aulas",
      "Aulas ao vivo",
      "Professores especializados",
      "Suporte de experts",
    ],
    buttonText: "Comprar",
    buttonVariant: "outlined",
  },
  {
    title: "Avançado",
    price: "115",
    description: [
      "Prioridade no suporte",
      "Melhor custo-beneficio",
      "Vídeo-aulas",
      "Professores especializados",
      "Aulas ao vivo",
      "Acesso a todos os planos",
      
    ],
    buttonText: "Comece Agora",
    buttonVariant: "contained",
  },
  {
    title: "Intermediário",
    price: "95",
    description: [
      "Vídeo-aulas",
      "Aulas ao vivo",
      "Professores especializados",
      "Acesso ao plano básico",
      "Suporte de experts",
    ],
    buttonText: "Comprar",
    buttonVariant: "outlined",
  },
];

const DivStyle = styled.div`
   margin-bottom: 0vh; 
   margin-top: 21vh;
`;



function PricingContent() {
  return (
    
    <React.Fragment >
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none"}}}
      />
      <CssBaseline />
      <Menu />
      
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 3, marginTop: 8 }}
      >
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="#171846"
          gutterBottom
          sx={{textShadow:'black 0.2em 0.2em 0.2em;'}}
        >
          Start Now!
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <ThemeProvider theme={theme}>
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      color: "white",
                      backgroundColor: (theme) => theme.palette.primary.main,
                    }}
                  />
                </ThemeProvider>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h3"
                      color="text.primary"
                    >
                      R${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mês
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="warning"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <DivStyle>
      <Footer /> 
      </DivStyle>
    </React.Fragment>
    
  );
}

export default function Pricing() {
  return <PricingContent />;
}
