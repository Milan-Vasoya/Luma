import React, { useContext, useEffect, useState } from "react";
import "./configurable.product.scss";
import ProductColor from "./productColors/productColor.component";
import ProductSize from "./productSizes/productSizes.component";
import ColorAttributes from "../../attributes/Colors/Colors.attributes";
import SizeAttributes from "../../attributes/Sizes/Sizes.attributes";
import fetchData from "../fetchData/withAdminToken/fetchdata";
import { imageContext } from "../Product-display-container/Product-display-cotainer.component";
import { ReverseColorsAttribute } from "../../attributes/Colors/Colors.attributes";
import { ReverseSizesAttribute } from "../../attributes/Sizes/Sizes.attributes";
import { ProdItemContex } from "../product-item/producti-item-info/productItemInfo.component";

const ConfigurableProduct = ({
  configOptions = [],
  label = false,
  sku,
  configItemSetter,

}) => {
  let sizes = null;
  let colors = null;

  const { setImg } = useContext(imageContext);

  const { setImage } = useContext(ProdItemContex);


  const [variation, setVariation] = useState({});

  const variationSetter = (name, value) =>
    setVariation({ ...variation, [name]: value });

  const [active, setActive] = useState({ size: "", color: "" });

  configOptions.forEach((item) => {
    if (item.label === "Color") {
      colors = ColorAttributes(item.values);
    } else {
      sizes = SizeAttributes(item.values);
    }
  });

  useEffect(() => {
    setVariation({ color: colors[0], size: sizes[0] });

    return () => {
      sizes = null;
      colors = null;
    };
  }, []);

  useEffect(() => {
    if(active.size && active.color){
      
    const itemdata = Object.keys(active).map((item) =>
    item === "size"
      ? { option_id: "143", option_value: ReverseSizesAttribute[active.size] }
      : {
          option_id: "93",
          option_value: ReverseColorsAttribute[active.color],
        }
  );
  configItemSetter(itemdata);
    }
  }, [active]);

  
  useEffect(() => {
    if (variation.color && variation.color !== colors[0]) {
      return fetchData(
        `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}-${variation.size}-${variation.color}?fields=media_gallery_entries[file]`
      )
        .then((res) => res.media_gallery_entries)
        .then((data) => (label ? setImg(data[0].file) : setImage(data[0].file)));
    } else {
      if (label) {
        setImg("");
      }
      setImage("")
    }
  }, [variation]);

  // console.log(active);

  return (
    <div>
      {label ? (
        <div className="product-variation-label">
          Size: <span>{active.size ? active.size : null}</span>
        </div>
      ) : null}
      <div className="product-item-sizes">
        {sizes
          ? sizes.map((size, index) => (
              <ProductSize
                key={index}
                size={size}
                variationSetter={variationSetter}
                activeSetter={{ active, setActive }}
              />
            ))
          : null}
      </div>

      {label ? (
        <div className="product-variation-label">
          Color: <span>{active.color ? active.color : null}</span>
        </div>
      ) : null}

      <div className="product-item-color">
        {colors
          ? colors.map((color, index) => (
              <ProductColor
                key={index}
                color={color}
                variationSetter={variationSetter}
                activeSetter={{ active, setActive }}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ConfigurableProduct;
