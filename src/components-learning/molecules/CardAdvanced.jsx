import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img from "../../components/pages/planos/style/img/eua.jpg";

import { Link } from "react-router-dom";
//import Avancado from "../../components/pages/avancado/Avancado";

export default function MultiActionAreaCard() {
  return (
          <Link to="/avancado" style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="330"
                    image={img}
                    alt="imagem da Inglaterra"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Advanced
                  </Typography>
                  <Typography variant="body3" color="text.primary">
                    Chegou a hora de conquistar a sonhada fluência, dedicação e
                    constância irão te levar ao próximo nível.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
  );
}
