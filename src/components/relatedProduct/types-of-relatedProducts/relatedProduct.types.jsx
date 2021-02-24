import React, { useEffect, useState } from "react";
import fetchProducts from "../../fetchProducts/fetchProducts";
import "./relatedProduct.types.scss";

const TypesOfRelated = ({ sku }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchProducts(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}?fields=id,sku,name,price,media_gallery_entries[file]`
    ).then((data) => setProduct(data));
  }, []);
  if (product) {
    console.log(product.media_gallery_entries);
  }
  return (
    <div className="rel-prod">
      {product ? (
        <div className="rel-img-container">
        
        <img
        src={`https://m241full.digitsoftsol.co/pub/media/catalog/product${product.media_gallery_entries[0].file}`}
        alt="img"
        className="rel-img"
      />
        </div>
      ) : null}
      <div className="rel-prod-info">
        <ul className="rel-prod-list">
          <li className="rel-prod-name">{product?product.name:null}</li>
          <li className="rel-prod-price">
            as low as:<strong>${product?product.price:null}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TypesOfRelated;


