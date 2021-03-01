import React, { useEffect, useState } from "react";
import fetchData from "../fetchData/withAdminToken/fetchdata";
import { colorsAttribute } from "../../attributes/Colors/Colors.attributes";
import { sizesAttribute } from "../../attributes/Sizes/Sizes.attributes";
import './cartPage.styles.scss';
import DeleteData from "../deleteData/WithCustomerToken/deleteData";

const CartPage = ({
  cartItem: { item_id,sku, name, price, qty, product_type, product_option },
}) => {
  const [image, setImage] = useState("");



  useEffect(() => {
    fetchData(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}?fields=media_gallery_entries[file]`
    ).then((data) => setImage(data.media_gallery_entries[0].file));
  }, []);

  let configOptions = null;
  if (product_type === "configurable") {
    configOptions =
      product_option.extension_attributes.configurable_item_options;
  }

  const DeleteItem=(id)=>{
    DeleteData(`https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/items/${id}`)
    .then((res)=>console.log('[deleteItem]',res))
  }

  return (
    <tbody>
      <tr className="row">
        <td className="item-continer">
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
              <a href={`/product/${sku}`}>{name}</a>
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
          </div>
        </td>

        <td>
          <span>
            <span className="price">${price}</span>
          </span>
        </td>
        <td>
          <span>
            {qty ? (
              <input
                type="text"
                className="input"
                value={qty}
                onChange={() => alert("changed")}
              />
            ) : null}
          </span>
        </td>
        <td>
          <span>
            <span className="price">${price * qty}</span>
          </span>
        </td>
      </tr>

      <tr>
        <td colSpan="4">
          <div className="icon-container">
            <span className="icons">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span className="icons" onClick={()=>DeleteItem(item_id)}>
              <i className="fa fa-trash"></i>
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default CartPage;
