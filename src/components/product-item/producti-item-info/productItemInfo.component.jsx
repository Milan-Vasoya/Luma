import React, { useEffect, useState } from "react";
import "./productItemInfo.styles.scss";
import fetchProducts from "../../fetchProducts/fetchProducts";
import ColorAttributes from "../../../attributes/Colors/Colors.attributes";
import SizeAttributes from "../../../attributes/Sizes/Sizes.attributes";
import ProductColor from "../../productColors/productColor.component";
import ProductSize from "../../productSizes/productSizes.component";

let sizes = null;
let colors = null;
const ImagePath = "https://m241full.digitsoftsol.co/pub/media/catalog/product";

const ProductItemInfo = ({ sku }) => {

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchProducts(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}?fields=id,name,price,media_gallery_entries,extension_attributes[configurable_product_options]`
    ).then((data) => setProduct(data));
  }, [sku]);

  if (product.id) {
    const attributes =
      product.extension_attributes.configurable_product_options;
    attributes.forEach((item) => {
      if (item.label === "Color") {
        colors = ColorAttributes(item.values);
      } else {
        sizes = SizeAttributes(item.values);
      }
    });
  }

  return (
    <div className="product-item-info">
      <div className="product-item-image">
        {product.id ? (
          <img
            src={`${ImagePath}${product.media_gallery_entries[0].file}`}
            alt="img"
          />
        ) : null}
      </div>
      <div className="product-item-info-container">
        <div className="product-item-name">
          <span className="product-item-name__text">{product.name}</span>
        </div>

        <div className="product-item-price">
          <span className="product-item-name__text">
            Price: <b>{product.price}</b>
          </span>
        </div>

        <div className="product-item-sizes">
          {sizes
            ? sizes.map((size, index) => (
                <ProductSize key={index} size={size} />
              ))
            : null}
        </div>

        <div className="product-item-color">
          {colors
            ? colors.map((color, index) => (
                <ProductColor key={index} color={color} />
              ))
            : null}
        </div>
        <div className="product-item-add-container">
          <div className="product-item-add">
            <div className="hover-toggle">
              <button className="product-item-btn">Add To Cart</button>
              <div className="product-item-icon">
                <span className="product-item-icon__icon">
                  <i className="fa fa-heart"></i>
                </span>
                <span className="product-item-icon__icon">
                  <i className="fa fa-exchange"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductItemInfo);
