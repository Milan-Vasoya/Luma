import React, { useEffect, useState } from "react";
import "./cartItem.styles.scss";
import { Link } from "react-router-dom";
import fetchData from "../../fetchData/withAdminToken/fetchdata";
import { sizesAttribute } from "../../../attributes/Sizes/Sizes.attributes";
import { colorsAttribute } from "../../../attributes/Colors/Colors.attributes";

const ImagePath = "https://m241full.digitsoftsol.co/pub/media/catalog/product";

const CartItem = ({
  cartItem: { sku, name, price, qty, product_type, product_option },
}) => {
  const [details, setDetails] = useState(false);
  const [image, setImage] = useState("");
  useEffect(() => {
    fetchData(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}?fields=media_gallery_entries[file]`
    ).then((data) => setImage(data.media_gallery_entries[0].file));

    return ()=>setDetails("")
  }, [sku]);

  
  let configOptions = null;
  if (product_type === "configurable") {
    configOptions =
      product_option.extension_attributes.configurable_item_options;
  }

  return (
    <div className="cart-item">
      <div className="image-container">
        {image ? (
          <img
            className="cart-img"
            src={`${ImagePath}/${image}`}
            alt="img"
          ></img>
        ) : null}
      </div>

      <div className="ca-it-info">
        <ul className="ca-it-list">
          <li className="ca-list-item">
            <Link to={`/product/${sku}`}>{name}</Link>
          </li>
          {configOptions ? (
            <li className="ca-list-item" onClick={() => setDetails(!details)}>
              {" "}
              <span className="ca-it-detail-text">
                See Details
                {details ? (
                  <span className="arrow-down">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                  </span>
                ) : (
                  <span className="arrow-down">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                )}
              </span>
              {details ? (
                <div className="details">
                  {configOptions.map((attr) => {
                    if (attr.option_id === "143") {
                      return (
                        <span key={attr.option_id}>
                          <strong>size:</strong>
                          {sizesAttribute[attr.option_value]}
                        </span>
                      );
                    } else if (attr.option_id === "93") {
                      return (
                        <span key={attr.option_id}>
                          <strong>Color:</strong>{" "}
                          {colorsAttribute[attr.option_value]}
                        </span>
                      );
                    } else {
                      return (
                        <span key={attr.option_id}>{attr.option_value}</span>
                      );
                    }
                  })}
                </div>
              ) : null}
            </li>
          ) : null}
          <li className="ca-list-item">
            {" "}
            <strong className="ca-price">${price}</strong>
          </li>
          <li className="ca-list-item">
            <span>Qty:</span>
            <input
              className="ca-item-input"
              type="text"
              value={qty}
              onChange={() => alert("change value")}
            />
          </li>
        </ul>
      </div>
      <div className="item-icons">
        <span>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </span>
        <span>
          <i className="fa fa-trash"></i>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
