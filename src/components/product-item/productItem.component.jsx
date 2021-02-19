import React, { useEffect, useState } from "react";
import ProductItemInfo from "./producti-item-info/productItemInfo.component";
import "./productItem.styles.scss";
import fetchProducts from "../fetchProducts/fetchProducts";

const ProductItem = () => {
  const [tops, setTops] = useState([]);

  const setTop10 = (data) => {
    const newData = [];
    data.forEach((item, index) => {
      if (index < 10) {
        newData.push(item);
      }
    });
    setTops(newData);
  };

  useEffect(() => {
    fetchProducts(
      "https://m241full.digitsoftsol.co/index.php/rest/V1/categories/21/products?fields=sku"
    ).then((data) => setTop10(data));
  }, []);


  return (
    <div className="product-item">
      {tops
        ? tops.map(({sku}) => (
            <ProductItemInfo key={sku} sku={sku} />
          ))
        : null}
    </div>
  );
};

export default ProductItem;
