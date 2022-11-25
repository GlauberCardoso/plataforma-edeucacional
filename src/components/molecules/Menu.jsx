import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Menu() {
  return (
    <div className="menu">
      <Link href="#">{"Home"}</Link>
      <Link href="#">{"Planos"}</Link>
      <Link href="#">{"Sobre"}</Link>
      <Link href="#">{"Depoimentos"}</Link>
      <Link href="#">{"FAQ"}</Link>
      <Link href="#">{"Contato"}</Link>
      <Button href="#">ACESSAR</Button>
    </div>
  );
}
