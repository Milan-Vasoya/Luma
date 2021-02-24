import React, { useEffect } from "react";
import "./configurable.product.scss";
import ProductColor from "./productColors/productColor.component";
import ProductSize from "./productSizes/productSizes.component";
import ColorAttributes from "../../attributes/Colors/Colors.attributes";
import SizeAttributes from "../../attributes/Sizes/Sizes.attributes";

const ConfigurableProduct = ({ configOptions=[], label = false }) => {
  let sizes = null;
  let colors = null;

  configOptions.forEach((item) => {
    if (item.label === "Color") {
      colors = ColorAttributes(item.values);
    } else {
      sizes = SizeAttributes(item.values);
    }
  });



  useEffect(() => {
    return () => {
      sizes = null;
      colors = null;
    };
  }, []);

  // console.log("sizes", configOptions);
  return (
    <div>
      {label ? <div className="product-variation-label">Size</div> : null}
      <div className="product-item-sizes">
        {sizes
          ? sizes.map((size, index) => <ProductSize key={index} size={size} />)
          : null}
      </div>

      {label ? <div className="product-variation-label">Color</div> : null}

      <div className="product-item-color">
        {colors
          ? colors.map((color, index) => (
              <ProductColor key={index} color={color} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ConfigurableProduct;
