import React from "react";

import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <Link href="#" underline="none">
        {'Home'}
      </Link>
      <Link href="#" underline="none">
        {'Planos'}
      </Link>
      <Link href="#" underline="none">
        {'Sobre'}
      </Link>
      <Link href="#" underline="none">
        {'Depoimentos'}
      </Link>
      <Link href="#" underline="none">
        {'FAQ'}
      </Link>
      <Link href="#" underline="none">
        {'Contato'}
      </Link>
    </div>
  );
}
