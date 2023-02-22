import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img from "../../components/pages/planos/style/img/inglaterra.jpg";

import { Link } from "react-router-dom";

export default function MultiActionAreaCard() {
  return (
    <Link to="/intermediario" style={{ textDecoration: 'none' }}>
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
              Intermediary
            </Typography>
            <Typography variant="body3" color="text.prymary">
              Chegou a hora de dar um passo adiante para a sua fluência. Parabéns
              por ser capaz de se comunicar minimamente em inglês.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
