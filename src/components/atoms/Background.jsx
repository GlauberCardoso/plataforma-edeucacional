import React from "react";
import img from "../pages/sobre/style/sunshine.jpg";

const Background = () => {
  return (
    <div>
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
    </div>
  );
};

export default Background;
