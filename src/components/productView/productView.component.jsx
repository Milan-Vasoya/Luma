import React, { useEffect, useState } from "react";
import "./productView.styles.scss";
import ProductDisplay from "../Product-display-container/Product-display-cotainer.component";
import ProductTab from "../product-tab/product-tab.components";
import fetchdata from "../fetchData/withAdminToken/fetchdata";
import RelatedProduct from "../relatedProduct/RelatedProduct.component";
import { useParams,useLocation } from "react-router-dom";

const Productview = () => {
  let params = useParams();
  let sku = params.sku;

  const EditItems = useLocation().state;
 console.log('editItems',EditItems)

  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchdata(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}?fields=name,id,price,sku,type_id,extension_attributes[stock_item[is_in_stock],configurable_product_options],media_gallery_entries,product_links,custom_attributes`
    ).then((data) => setProduct(data));

    return () => setProduct(null);
  }, [sku]);

  let images = null;
  if (product) {
    images = product.media_gallery_entries.map((item) => item.file);
  }

  let customAttributes;
  if (product) {
    customAttributes = product.custom_attributes;
  }

  return (
    <div className="prodView">
      <div className="prodView-display">
        {product ? <ProductDisplay prod={{ ...product, images }} EditItems={EditItems} /> : null}

        <div className="prodView-tab">
          {customAttributes ? (
            <ProductTab customAttributes={customAttributes} />
          ) : null}
        </div>
        <div>
          {product ? (
            <RelatedProduct prodLinks={product.product_links} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Productview;
