import React, { useEffect, useState } from "react";
import ProductItemInfo from "./producti-item-info/productItemInfo.component";
import "./productItem.styles.scss";
import fetchdata from "../fetchData/withAdminToken/fetchdata";

const ProductItem = ({ pageId = 21 }) => {
  // const PageCategoryId = useSelector(selectPageId);
  const [tops, setTops] = useState([]);

  const setTop10 = (data) => {
    const newData = [];

    data.forEach((item, index) => {
      if (index < 2) {
        newData.push(item);
      }
    });

    setTops(newData);
  };

  useEffect(() => {
    // console.log('[productItem]',pageId);

    fetchdata(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/categories/${pageId}/products?fields=sku`
    ).then((data) => setTop10(data));

    return () => setTops([]);
  }, [pageId]);

  return (
    <div className="product-item">
      {tops
        ? tops.map(({ sku }) => <ProductItemInfo key={sku} sku={sku} />)
        : null}
    </div>
  );
};

export default ProductItem;
