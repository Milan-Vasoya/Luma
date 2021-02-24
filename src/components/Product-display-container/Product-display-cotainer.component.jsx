import React from "react";
import "./product-display-container.styles.scss";
import ImageSlideShow from "../ImageSlideShow/imageSlideshow.componenet";
import CustomButton from "../Custom-Component/button/custom-button.component";
import ConfigurableProduct from "../configurableProduct/configurable.product";

const ProductDisplayContainer = ({prod}) => {

 
  

  return (
    <div className="product-display-container">
      <div className="product-display-info">
        <div className="produc-display-image">
          <ImageSlideShow images={prod.images} />
        </div>

        <div className="product-information">
          <div className="product-display-title">
            <span>{prod.name}</span>
          </div>

          <div className="product-display-rating-panel">
            <div className="product-display-rating">
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>

            <div className="product-display-review">
              <span>2</span>
              <span>Reviews</span>
            </div>

            <div className="product-display-add-review">
              <span>Add Review</span>
            </div>
          </div>
          <div className="product-display-price-info">
            <div className="product-display-price-container">
              <span className="product-display-price-label">As low As</span>
              <span className="product-display-price">${prod.price}</span>
            </div>
            <div className="product-display-stock">
              <span className="product-display-stock-label">{prod.inStock?"IN STOCK":"OUT OF STOCK"}</span>
              <span>SKU#: {prod.sku}</span>
            </div>
          </div>

          <div className="product-display-main">
            <div className="product-display-variation">
              {// colors and sizes
                
              <ConfigurableProduct configOptions={prod.options} label={true}/>
              
              }
            </div>

            <div className="product-display-quantity">
              <span>Qty</span>

              <span>
                <input
                  type="number"
                  defaultValue={1}
                  className="quantity-input"
                />
              </span>
            </div>

            <div className="product-display-add">
              <CustomButton
                className="google-sign-in custom-button"
                onClickHandle={() => alert("clicked")}
              >
                Add To Cart
              </CustomButton>
            </div>

            <div className="product-display-links">
              <a href="/">
                <span className="heart-icon">
                  <i className="fa fa-heart"></i>
                </span>
                ADD TO WISH LIST
              </a>

              <a href="/">
                <span className="heart-icon">
                  <i className="fa fa-exchange"></i>
                </span>
                ADD TO COMPARE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayContainer;
