import { useState } from "react";
import productImage1 from "../../assets/image-product-1.jpg";
import productImage2 from "../../assets/image-product-2.jpg";
import productImage3 from "../../assets/image-product-3.jpg";
import productImage4 from "../../assets/image-product-4.jpg";

import "./ImageSlider.css";

const images = [productImage1, productImage2, productImage3, productImage4];

const ImageSlider = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    if (currentPhoto < 3) {
      setCurrentPhoto(currentPhoto + 1);
    } else {
      setCurrentPhoto(0);
    }
  };

  const previousPhoto = () => {
    if (currentPhoto > 0) {
      setCurrentPhoto(currentPhoto - 1);
    } else {
      setCurrentPhoto(0);
    }
  };

  return (
    <div
      className="product-slider"
      style={{
        backgroundImage: `url(${images[currentPhoto]})`,
      }}
    >
      <div className="buttons">
        <button onClick={previousPhoto} className="previous">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <button onClick={nextPhoto} className="next">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
