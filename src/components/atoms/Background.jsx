import React from "react";
import img from "../pages/sobre/style/sunshine.jpg";
import style from 'styled-components';

const BackgroundWrapper = style.div`
  
  @media (max-width: 768px) {
    background-image: none;
  }
`;

const Background = () => {
  return (
    <BackgroundWrapper>
      <img
        style={{
          zIndex: "-20",
          position: "absolute",
          margin: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
         
        }}
        src={img}
        alt="Céu em tons de laranja"
      />
    </BackgroundWrapper>
  );
};

export default Background;
