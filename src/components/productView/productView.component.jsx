import React, { useEffect, useState } from "react";
import "./productView.styles.scss";
import ProductDisplay from "../Product-display-container/Product-display-cotainer.component";
import ProductTab from "../product-tab/product-tab.components";
import fetchProduct from "../fetchProducts/fetchProducts";
import RelatedProduct from "../relatedProduct/RelatedProduct.component";


const Productview = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchProduct(
      "https://m241full.digitsoftsol.co/index.php/rest/V1/products/WS06?fields=name,price,sku,type_id,extension_attributes[stock_item,configurable_product_options],media_gallery_entries,product_links,custom_attributes"
    ).then((data) => setProduct(data));
  }, []);

  //name,price,SKU,sizes,colors,inStock,imageGallarry
  let images = null;
  if (product.media_gallery_entries) {
    images = product.media_gallery_entries.map((item) => item.file);
  }

  let customAttributes;
  if (product.custom_attributes) {
    customAttributes = product.custom_attributes;
    console.log(product);
  }

  return (
    <div className="prodView">
      <div className="prodView-display">
        {product.extension_attributes ? (
          <ProductDisplay
            prod={{
              name: product.name,
              price: product.price,
              sku: product.sku,
              inStock: product.extension_attributes.stock_item.is_in_stock,
              type_id: product.type_id,
              options:
                product.extension_attributes.configurable_product_options,
              images: images,
            }}
          />
        ) : null}
      </div>

      <div className="prodView-tab">
        {customAttributes ? (
          <ProductTab customAttributes={customAttributes} />
        ) : null}
      </div>

      <div>
        {product.product_links ? (
          <RelatedProduct prodLinks={product.product_links} />
        ) : null}
      </div>
    </div>
  );
};

export default Productview;
