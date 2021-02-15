import React, { useState } from "react";
import "./imageSlideShow.styles.scss";
import ImageLoader from "./image-loader/image-loader.component";

const ImageSlideShow = () => {
  const [count, setCount] = useState(0);
  const images = [
    "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://i.picsum.photos/id/380/200/300.jpg?grayscale&hmac=GJWYvpHCRRldAJjla1i5ljlrmqB0X10iTISyPqHtQNA",
    "https://i.picsum.photos/id/351/200/300.jpg?hmac=OSQYmRI8IZkaMcC4ERotpBhe0AymVYajIIKPJFDzGBY",
    "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    "https://i.picsum.photos/id/81/200/300.webp?hmac=GKOApmmdTie6EGVfZ0OeZAt-iHOMeNCPxc1LUn-hTJE",
  ];

  const setCountDefault = (countToSet) => {
    const arrayLenth = images.length-1;
    if (countToSet > arrayLenth) {
      setCount(0);
    } else if (countToSet < 0) {
      setCount(arrayLenth);
    }else{
      setCount(countToSet)
    }
  };
 

  return (
    <div >
      <div className="image-slider-container">
        <span
          className="image-icon-left-arrow"
          onClick={()=>setCountDefault(count - 1)}
        >
        
          <i className="fa fa-chevron-left"></i>
        </span>
        <img
          className="slider-container-images"
          src={`${images[count]}`}
          alt="img"
        />
        <span
          className="image-icon-right-arrow"
          onClick={()=>setCountDefault(count + 1)}
        >
          <i className="fa fa-chevron-right"></i>
        </span>
      </div>

      <div className="image-slider-sub-container">
        {images.map((image, index) => (
          <ImageLoader key={index} abc={{ index, image, setCountDefault }} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideShow;
