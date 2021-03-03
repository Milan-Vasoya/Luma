import React, { useEffect, useState } from "react";
import "./imageSlideShow.styles.scss";
import ImageLoader from "./image-loader/image-loader.component";

const ImagePath = "https://m241full.digitsoftsol.co/pub/media/catalog/product";

const ImageSlideShow = ({ images }) => {
  const [count, setCount] = useState(0);
  useEffect(()=>setCount(0),[images])

  const setCountDefault = (countToSet) => {
    const arrayLenth = images.length - 1;
    if (countToSet > arrayLenth) {
      setCount(0);
    } else if (countToSet < 0) {
      setCount(arrayLenth);
    } else {
      setCount(countToSet);
    }
  };

  // console.log('images',images)

  return (
    <div>
      <div className="image-slider-container">
        <span
          className="image-icon-left-arrow"
          onClick={() => setCountDefault(count - 1)}
        >
          <i className="fa fa-chevron-left"></i>
        </span>
        <img
          className="slider-container-images"
          src={`${ImagePath}/${images[count]}`}
          alt="img"
        />
        <span
          className="image-icon-right-arrow"
          onClick={() => setCountDefault(count + 1)}
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
