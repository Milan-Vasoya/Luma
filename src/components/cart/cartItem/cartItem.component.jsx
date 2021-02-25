import React, { useState } from "react";
import "./cartItem.styles.scss";
import { Link } from "react-router-dom";

const CartItem = () => {
  const [details, setDetails] = useState(false);

  console.log(details);
  return (
    <div className="cart-item">
      <div className='image-container'>
        <img
          className="cart-img"
          src="https://m241full.digitsoftsol.co/pub/media/catalog/product/w/h/wh01-green_main_1.jpg"
          alt="img"
        ></img>
      </div>

      <div className="ca-it-info">
        <ul className="ca-it-list">
          <li className="ca-list-item">
            <Link to={`/product/WH01`}>Phoebe Zipper Sweatshirt</Link>
          </li>
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
                <span>
                  <strong>size:</strong> M
                </span>
                <span>
                  <strong>Color:</strong> Purple
                </span>
              </div>
            ) : null}
          </li>
          <li className="ca-list-item">
            {" "}
            <strong className="price">$59.00</strong>
          </li>
          <li className="ca-list-item">
            <span>Qty:</span>
            <input
              className="ca-item-input"
              type="text"
              value="2"
              onChange={() => alert("change value")}
            />
          </li>

          <div className="item-icons">
            <span>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span>

              <i className="fa fa-trash"></i>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CartItem;
