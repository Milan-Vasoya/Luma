import React, { useEffect, useState } from "react";
import ProductItemInfo from "./producti-item-info/productItemInfo.component";
import "./productItem.styles.scss";

const ProductItem = () => {
  //   const [products]= useState([

  //     {
  //       "add_to_cart_button": {
  //         "post_data": "{\"action\":\"https:\\/\\/m241full.digitsoftsol.co\\/index.php\\/checkout\\/cart\\/add\\/uenc\\/%25uenc%25\\/product\\/1\\/\",\"data\":{\"product\":\"1\",\"uenc\":\"%uenc%\"}}",
  //         "url": "https://m241full.digitsoftsol.co/index.php/checkout/cart/add/uenc/%25uenc%25/product/1/",
  //         "required_options": false
  //       },

  //       "price_info": {
  //         "final_price": 34,
  //         },
  //       "images": [
  //         {
  //           "url": "https://m241full.digitsoftsol.co/pub/media/catalog/product/cache/c13c123251dd2e1e22b832b10e872b10/m/b/mb01-blue-0.jpg",
  //           "code": "recently_viewed_products_grid_content_widget",
  //           "height": 300,
  //           "width": 240,
  //           "label": "Joust Duffle Bag",
  //           "resized_width": 240,
  //           "resized_height": 300
  //         },
  //         {
  //           "url": "https://m241full.digitsoftsol.co/pub/media/catalog/product/cache/2cc72a84c2f169299925b4b6b253157c/m/b/mb01-blue-0.jpg",
  //           "code": "recently_viewed_products_list_content_widget",
  //           "height": 340,
  //           "width": 270,
  //           "label": "Joust Duffle Bag",
  //           "resized_width": 270,
  //           "resized_height": 340
  //         }
  //       ],
  //       "sizes": ['XS','S','M','L'],
  //       "colors": ['red','blue','yellow','green'],
  //       "url": "https://m241full.digitsoftsol.co/index.php/joust-duffle-bag.html",
  //       "id": 1,
  //       "name": "Joust Duffle Bag",
  //     }

  // ]);

  const [products, setProducts] = useState([]);

  const url =
    "https://m241full.digitsoftsol.co/index.php/rest/all/V1/products-render-info?searchCriteria%5BsortOrders%5D%5B0%5D%5Bfield%5D=Tops&searchCriteria%5BpageSize%5D=20&storeId=1&currencyCode=usd";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.items));
  }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://m241full.digitsoftsol.co/index.php/rest/all/V1/integration/admin/token",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: "admin",
  //         password: "admin@123",
  //       }),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="product-item">
      {products
        ? products.map((product) => (
            <ProductItemInfo key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

export default ProductItem;
