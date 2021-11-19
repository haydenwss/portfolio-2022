import React from "react";

const Image = ({ src, type = "image/webp", alt }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Image;
