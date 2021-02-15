import React, { useState } from "react";
import "./product-display-container.styles.scss";
import ImageSlideShow from "../ImageSlideShow/imageSlideshow.componenet";
import CustomButton from "../Custom-Component/button/custom-button.component";

const ProductDisplayContainer = () => {
  const [products, setProducts] = useState([
    {
      add_to_cart_button: {
        post_data:
          '{"action":"https:\\/\\/m241full.digitsoftsol.co\\/index.php\\/checkout\\/cart\\/add\\/uenc\\/%25uenc%25\\/product\\/1306\\/","data":{"product":"1306","uenc":"%uenc%"}}',
        url:
          "https://m241full.digitsoftsol.co/index.php/checkout/cart/add/uenc/%25uenc%25/product/1306/",
        required_options: false,
      },
      add_to_compare_button: {
        post_data: null,
        url:
          '{"action":"https:\\/\\/m241full.digitsoftsol.co\\/index.php\\/catalog\\/product_compare\\/add\\/","data":{"product":"1306","uenc":"aHR0cHM6Ly9tMjQxZnVsbC5kaWdpdHNvZnRzb2wuY28vaW5kZXgucGhwL3Jlc3QvYWxsL1YxL3Byb2R1Y3RzLXJlbmRlci1pbmZvP3NlYXJjaENyaXRlcmlhJTVCZmlsdGVyR3JvdXBzJTVEJTVCMCU1RCU1QmZpbHRlcnMlNUQlNUIwJTVEJTVCZmllbGQlNUQ9U0tVJnNlYXJjaENyaXRlcmlhJTVCZmlsdGVyR3JvdXBzJTVEJTVCMCU1RCU1QmZpbHRlcnMlNUQlNUIwJTVEJTVCdmFsdWUlNUQ9V0owNyZzZWFyY2hDcml0ZXJpYSU1QmN1cnJlbnRQYWdlJTVEPTEmc3RvcmVJZD0xJmN1cnJlbmN5Q29kZT11c2Q,"}}',
        required_options: null,
      },
      price_info: {
        final_price: 59,
        max_price: 59,
        max_regular_price: 59,
        minimal_regular_price: 59,
        special_price: null,
        minimal_price: 59,
        regular_price: 59,
        formatted_prices: {
          final_price: '<span class="price">usd59.00</span>',
          max_price: '<span class="price">usd59.00</span>',
          minimal_price: '<span class="price">usd59.00</span>',
          max_regular_price: '<span class="price">usd59.00</span>',
          minimal_regular_price: null,
          special_price: null,
          regular_price: '<span class="price">usd59.00</span>',
        },
      },
      images: [
        {
          url:
            "https://m241full.digitsoftsol.co/pub/media/catalog/product/cache/c13c123251dd2e1e22b832b10e872b10/w/j/wj07-purple_main_1.jpg",
          code: "recently_viewed_products_grid_content_widget",
          height: 300,
          width: 240,
          label: "Inez Full Zip Jacket",
          resized_width: 240,
          resized_height: 300,
        },
        {
          url:
            "https://m241full.digitsoftsol.co/pub/media/catalog/product/cache/2cc72a84c2f169299925b4b6b253157c/w/j/wj07-purple_main_1.jpg",
          code: "recently_viewed_products_list_content_widget",
          height: 340,
          width: 270,
          label: "Inez Full Zip Jacket",
          resized_width: 270,
          resized_height: 340,
        },
      ],
      url:
        "https://m241full.digitsoftsol.co/index.php/inez-full-zip-jacket.html",
      id: 1306,
      name: "Inez Full Zip Jacket",
      type: "configurable",
      is_salable: "1",
      store_id: 1,
      currency_code: "usd",
      extension_attributes: {
        review_html:
          '        <div class="product-reviews-summary short">\n                <div class="rating-summary">\n            <span class="label"><span>Rating:</span></span>\n            <div class="rating-result"\n                 id="rating-result_1306"\n                 title="67%">\n                <span><span>67%</span></span>\n            </div>\n            <script type="text&#x2F;javascript">var elemB79D4nhu = document.querySelector(\'#rating-result_1306 span\');\nif (elemB79D4nhu) {\nelemB79D4nhu.style.width = \'67%\';\n}</script>        </div>\n                <div class="reviews-actions">\n            <a class="action view"\n               href="https://m241full.digitsoftsol.co/index.php/inez-full-zip-jacket.html#reviews">3                &nbsp;<span>Reviews                </span>\n            </a>\n        </div>\n    </div>\n',
        wishlist_button: {
          post_data: null,
          url:
            '{"action":"https:\\/\\/m241full.digitsoftsol.co\\/index.php\\/wishlist\\/index\\/add\\/","data":{"product":1306,"uenc":"aHR0cHM6Ly9tMjQxZnVsbC5kaWdpdHNvZnRzb2wuY28vaW5kZXgucGhwL3Jlc3QvYWxsL1YxL3Byb2R1Y3RzLXJlbmRlci1pbmZvP3NlYXJjaENyaXRlcmlhJTVCZmlsdGVyR3JvdXBzJTVEJTVCMCU1RCU1QmZpbHRlcnMlNUQlNUIwJTVEJTVCZmllbGQlNUQ9U0tVJnNlYXJjaENyaXRlcmlhJTVCZmlsdGVyR3JvdXBzJTVEJTVCMCU1RCU1QmZpbHRlcnMlNUQlNUIwJTVEJTVCdmFsdWUlNUQ9V0owNyZzZWFyY2hDcml0ZXJpYSU1QmN1cnJlbnRQYWdlJTVEPTEmc3RvcmVJZD0xJmN1cnJlbmN5Q29kZT11c2Q,"}}',
          required_options: null,
        },
      },
    },
  ]);

  return (
    <div className="product-display-container">
      <div className="product-display-info">
        <div className="produc-display-image">
          <ImageSlideShow />
        </div>

        <div className="product-information">
          <div className="product-display-title">
            <span>Karmen Yoga Pant</span>
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
              <span className="product-display-price">$36.00</span>
            </div>
            <div className="product-display-stock">
              <span className="product-display-stock-label">IN STOCK</span>
              <span>SKU#: WP01</span>
            </div>
          </div>

          <div className="product-display-main">
            <div className="product-display-variation">
              <span className="product-variation-label">Sizes</span>
              <div className="product-display-size">
                <span className="product-various-sizes">XS </span>

                <span className="product-various-sizes">X</span>

                <span className="product-various-sizes">M</span>
              </div>

              <span className="product-variation-label">Colors</span>
              <div className="product-display-color">
                <span
                  className="product-various-color"
                  style={{
                    background: `black`,
                  }}
                >
                  {" "}
                </span>
                <span
                  className="product-various-color"
                  style={{
                    background: `grey`,
                  }}
                >
                  {" "}
                </span>
                <span
                  style={{
                    background: `white`,
                  }}
                  className="product-various-color"
                >
                  {" "}
                </span>
              </div>
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
              ADD TO WISH LIST
            </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayContainer;
