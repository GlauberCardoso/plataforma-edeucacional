import React from 'react';
import { Link } from 'react-router-dom';

import arrowLeft from "../../assets/img/icon-esquerda-48.png";

export default function SubMenu() {
  return (
    <div className='container-submenu'>
        <Link to={"/aprendizado"}>
            <img style={{marginRight: '12px'}} className='back-submenu' src={arrowLeft} alt="arrow-left" />
        </Link>
        <span>Cursos</span>
    </div>
  )
}
