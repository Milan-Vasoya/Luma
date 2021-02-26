import React from "react";

import "./cart.styles.scss";

const cartPage = () => {
  return (
    <div className="cart-container">
      <div className="sub-container">
        <div className="cart">
          <form>
            <table className="cart-table">
              <thead className="table-header">
                <tr>
                  <th>
                    <span>Item</span>
                  </th>
                  <th>
                    <span>Price</span>
                  </th>
                  <th>
                    <span>Qty</span>
                  </th>
                  <th>
                    <span>Subtotal</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="row">
                  <td className="item-continer">
                    <div className="cart-img-container">
                      <img
                        className="cart-img"
                        src="https://m241full.digitsoftsol.co/pub/media/catalog/product/w/h/wh01-green_main_1.jpg"
                        alt="img"
                      ></img>
                    </div>

                    <div className="item-details">
                      <div className="item-name">
                        <a href="/">Neve Studio Dance Jacket</a>
                      </div>
                      <div className="variation">
                        <span>
                          <strong className="var-item">Size:</strong>M
                        </span>
                        <span>
                          <strong className="var-item">Color:</strong>Purple
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span>
                      <span className="price">$69.00</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      <input type="text" className="input" />
                    </span>
                  </td>
                  <td>
                    <span>
                      <span className="price">$69.00</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td colSpan="4">
                    <div className="icon-container">
                      <span className="icons">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </span>
                      <span className="icons">
                        <i className="fa fa-trash"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default cartPage;
