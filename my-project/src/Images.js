import React from "react";

const Images = ({ labelImage, englishFlagImage, tamilFlagImage, logoImage }) => {
  return (
    <div>
      <img src={labelImage} alt="Label" />
      <img src={englishFlagImage} alt="English Flag" />
      <img src={tamilFlagImage} alt="Tamil Flag" />
      <img src={logoImage} alt="Logo" />
      <img src={CallImages} alt="Call" />
    </div>
  );
}

export default Images;
