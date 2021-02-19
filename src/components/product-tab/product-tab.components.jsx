import React, { useState } from "react";
import "./product-tab.styles.scss";

const ProductTab = () => {
  const [tab, setTab] = useState(1);



  return (
    <div className="prod-tab-contaier">
      <div className="prod-tab-sub-container">
        <div className="prod-tab-switch">
          <div
            className={`prod-tab-switch-1 ${tab === 1 ? `chage-height` : null}`}
            onClick={() => setTab(1)}
          >
            <span>Details</span>
          </div>

          <div
            className={`prod-tab-switch-2 ${tab === 2 ? `chage-height` : null}`}
            onClick={() => setTab(2)}
          >
            <span>More Information</span>
          </div>

          <div
            className={`prod-tab-switch-3 ${tab === 3 ? `chage-height` : null}`}
            onClick={() => setTab(3)}
          >
            <span>Details</span>
          </div>
        </div>

        <div className="prod-tab">
          {tab === 1 ? (
            <div className="prod-tab-1">
              <p>
                The Ingrid Running Jacket combines sleek design and high
                performance with slim, contoured fit and moisture-wicking
                fabric. It features a full-zip construction and a collared neck
                to keep the elements out and body heat in.
              </p>
              <ul>
                <li> Slim fit.</li>
                <li>Moisture-wicking fabric.</li>
                <li>Two side pockets.</li>
                <li>Zippered pocket at back waist.</li>
                <li> Machine wash/dry.</li>
                <li>Ivory specked full zip</li>
              </ul>
            </div>
          ) : null}

          {tab === 2 ? (
            <div className="prod-tab-2">
              <table>
                <tbody>
                  <tr>
                    <th> Style </th>
                    <td>Jacket, Lightweight, Full Zip </td>
                  </tr>

                  <tr>
                    <th>Material </th>
                    <td> Nylon, Polyester, CoolTech™</td>
                  </tr>

                  <tr>
                    <th>Pattern </th>
                    <td> Solid</td>
                  </tr>

                  <tr>
                    <th> Climate </th>
                    <td> Cool, Spring, Windy, Wintry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
          {tab === 3 ? (
            <div className="prod-tab-3">
              <span className="prod-review-title">Customer Reviews</span>

              <div className="prod-review-body">
                <div className="prod-review-item">
                  <div className="review-title">
                    Fleece inside, sweater outside
                  </div>
                </div>

                <div className="prod-item-body">
                  <div className="prod-item-rating">
                    <span className="prod-rating-text">Rating</span>
                    <div className="prod-item-star">
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
                  </div>

                  <div className="prod-item-summary">
                    <div className="prod-item-description">
                      I love wearing fleece, but I hate how it pills and picks
                      up fluff and cat hair. This hoodie is perfect, because
                      it's a fleece on the inside and a sweater on the outside.
                      I wear it around the house all the time in the winter.
                    </div>
                    <span className="prod-item-writer">
                      Review by Tiffiny Posted on9/17/20
                    </span>
                  </div>
                </div>
              </div>

              <div className="prod-review-body">
                <div className="prod-review-item">
                  <div className="review-title">
                    Fleece inside, sweater outside
                  </div>
                </div>

                <div className="prod-item-body">
                  <div className="prod-item-rating">
                    <span className="prod-rating-text">Rating</span>
                    <div className="prod-item-star">
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
                  </div>

                  <div className="prod-item-summary">
                    <div className="prod-item-description">
                      I love wearing fleece, but I hate how it pills and picks
                      up fluff and cat hair. This hoodie is perfect, because
                      it's a fleece on the inside and a sweater on the outside.
                      I wear it around the house all the time in the winter.
                    </div>
                    <span className="prod-item-writer">
                      Review by Tiffiny Posted on9/17/20
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ProductTab;
