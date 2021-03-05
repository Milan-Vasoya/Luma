import React, { useEffect, useState } from "react";
import "./cartItem.styles.scss";
import { Link, useHistory } from "react-router-dom";
import fetchData from "../../fetchData/withAdminToken/fetchdata";
import { sizesAttribute } from "../../../attributes/Sizes/Sizes.attributes";
import { colorsAttribute } from "../../../attributes/Colors/Colors.attributes";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCartStart } from "../../../redux/cart/cart.action";
import { deleteGuestItemFromCart } from "../../../redux/guest/guest.action";
import { selectCustomerToken } from "../../../redux/customer/customer.selector";

const ImagePath = "https://m241full.digitsoftsol.co/pub/media/catalog/product";

const CartItem = ({
  cartItem: { sku, name, price, qty, product_type, product_option, item_id },
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const CustomerToken= useSelector(selectCustomerToken);

  const [details, setDetails] = useState(false);
  const [image, setImage] = useState("");
  useEffect(() => {
    fetchData(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}?fields=media_gallery_entries[file]`
    ).then((data) => setImage(data.media_gallery_entries[0].file));

    return () => setDetails("");
  }, [sku]);

  let configOptions = null;
  if (product_type === "configurable") {
    configOptions =
      product_option.extension_attributes.configurable_item_options;
  }

  const DeleteItem = (id) => {
    if (CustomerToken) {
      dispatch(
        deleteItemFromCartStart(
          id,
          `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/items/${id}`
        )
      );
    } else {
      dispatch(deleteGuestItemFromCart(id));
    }
  };

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
        <span
          onClick={() => {
            if (product_type === "configurable") {
              const splitSKU = sku.split("-");
              return history.push(`/product/${splitSKU[0]}`, {
                qty: qty,
                size: splitSKU[1],
                color: splitSKU[2],
                id: item_id,
              });
            } else {
              return history.push(`/product/${sku}`, {
                qty: qty,
                id: item_id,
              });
            }
          }}
        >
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </span>
        <span onClick={()=>DeleteItem(item_id)}>
          <i className="fa fa-trash"></i>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
