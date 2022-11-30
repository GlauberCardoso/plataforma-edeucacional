import React from 'react';
import img from "../pages/sobre/style/sunshine.jpg";

const Background =() => {
    return(
      <div>
        <img style={{zIndex: '-10', position:'absolute'}} src={img} alt="Céu em tons de laranja"/>
      </div>
    )
  }



export default Background;


