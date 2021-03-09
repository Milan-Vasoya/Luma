import React, { useEffect, useState } from "react";
import fetchData from "../../fetchData/withAdminToken/fetchdata";
import { colorsAttribute } from "../../../attributes/Colors/Colors.attributes";
import { sizesAttribute } from "../../../attributes/Sizes/Sizes.attributes";
import "./summary-item.scss";
import { useSelector } from "react-redux";

import { selectCustomerToken } from "../../../redux/customer/customer.selector";

const SummaryItem = ({
  cartItem: { sku, name, price, qty, product_type, product_option },
}) => {
  const [image, setImage] = useState("");

  const CustomerToken = useSelector(selectCustomerToken);
  useEffect(() => {
    fetchData(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}?fields=media_gallery_entries[file]`,
      CustomerToken
    ).then((data) => setImage(data.media_gallery_entries[0].file));

    return () => {
      setImage("");
    };
  }, [sku]);

  let configOptions = null;
  if (product_type === "configurable") {
    configOptions =
      product_option.extension_attributes.configurable_item_options;
  }

  return (
    <tbody>
      <tr className="row">
        <td className="sum-item-continer">
          <div className="cart-img-container">
            {image ? (
              <img
                className="cart-img"
                src={`https://m241full.digitsoftsol.co/pub/media/catalog/product${image}`}
                alt="img"
              ></img>
            ) : null}
          </div>

          <div className="item-details">
            <div className="item-name">
              <span>{name}</span>
            </div>
            {configOptions ? (
              <div className="variation">
                {configOptions.map((attr) => {
                  if (attr.option_id === "143") {
                    return (
                      <span key={attr.option_id}>
                        <strong className="var-item">Size:</strong>{" "}
                        {sizesAttribute[attr.option_value]}
                      </span>
                    );
                  } else if (attr.option_id === "93") {
                    return (
                      <span key={attr.option_id}>
                        <strong className="var-item">Color:</strong>{" "}
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

            <div className='qty'>
            <span>Qty: <b>{qty}</b></span>
            </div>

           
          </div>
      
        </td>
        <td>
         

          <span>
          Sum
            <span className="sum-price">${price * qty}</span>
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default SummaryItem;
