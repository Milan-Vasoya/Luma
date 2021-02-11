import React from "react";
import "./productItemInfo.styles.scss";

const sizes = ["XS", "S", "M", "L"];
const colors = ["red", "blue", "yellow", "green"];

const ProductItemInfo = ({ product: { images, price_info, name } }) => (
  <div className="product-item-info">
    <div className="product-item-image">
      <img src={`${images[0].url}`} alt="img" />
    </div>
    <div className="product-item-info-container">
      <div className="product-item-name">
        <span className="product-item-name__text">{name}</span>
      </div>

      <div className="product-item-price">
        <span className="product-item-name__text">
          Price: <b>{price_info.final_price}</b>
        </span>
      </div>

      <div className="product-item-sizes">
        {sizes.map((size, index) => (
          <div className="product-item-sizes-text" key={index}>
            {size}
          </div>
        ))}
      </div>

      <div className="product-item-color">
        {colors.map((color, index) => (
          <div
            className="product-item-color-box"
            key={index}
            style={{
              background: `${color}`,
            }}
          ></div>
        ))}
      </div>
      <div className="product-item-add">
        <button className="product-item-btn">Add To Cart</button>
        <div className="product-item-icon">
          <span className="product-item-icon__icon">
            <i class="fa fa-heart"></i>
          </span>
          <span className="product-item-icon__icon">
            <i class="fa fa-exchange"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ProductItemInfo;
