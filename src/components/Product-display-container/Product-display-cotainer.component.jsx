import React, { useState, createContext, useEffect } from "react";
import "./product-display-container.styles.scss";
import ImageSlideShow from "../ImageSlideShow/imageSlideshow.componenet";
import CustomButton from "../Custom-Component/button/custom-button.component";
import ConfigurableProduct from "../configurableProduct/configurable.product";
import validate from "../validate/prod-add-on-display";
import {
  addItemToCartStart,
  updateItemIncartStart,
} from "../../redux/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectQuoteId } from "../../redux/cart/cart.selector";
import { selectCustomerToken } from "../../redux/customer/customer.selector";
import {
  addGuestCartItemsstart,
  updateGuestcartItemsstart,
} from "../../redux/guest/guest.action";

export const imageContext = createContext({
  setImg: () => {},
});

const ProductDisplayContainer = ({
  EditItems,
  prod: { name, price, images, sku, extension_attributes, type_id },
}) => {
  const inStock = extension_attributes.stock_item.is_in_stock;
  const options = extension_attributes.configurable_product_options;
  const dispatch = useDispatch();

  const [img, setImg] = useState("");

  const QutoeId = useSelector(selectQuoteId);
  const CustomerToken = useSelector(selectCustomerToken);

  const data = {
    sku: sku,
    qty: 1,
    name: name,
    price: price,
    product_type: type_id,
    quote_id: QutoeId,
    product_option: {
      extension_attributes: {
        configurable_item_options: [],
      },
    },
  };

  const [itemData, setItemData] = useState(data);

  useEffect(() => {
    setItemData({ ...itemData, quote_id: QutoeId });
  }, [QutoeId]);

  useEffect(() => {
    if (EditItems) {
      setItemData({ ...itemData, qty: EditItems.qty });
    }
  }, [EditItems]);

  const configItemSetter = (value) =>
    setItemData({
      ...itemData,
      product_option: {
        extension_attributes: {
          configurable_item_options: value,
        },
      },
    });

  const onPostItem = (data) => {
    // console.log(data);
    const newData = {
      cartItem: {
        ...data,
      },
    };
    if (CustomerToken) {
      dispatch(
        addItemToCartStart(
          "https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/items",
          newData
        )
      );
    } else {
      dispatch(addGuestCartItemsstart(newData));
    }
  };

  const onUpdateItem = (data) => {
    console.log("update Data", data);
    const newData = {
      cartItem: {
        ...data,
      },
    };
    if (CustomerToken) {
      dispatch(
        updateItemIncartStart(
          `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/items/${EditItems.id}`,
          newData,
          EditItems.id
        )
      );
    } else {
      dispatch(updateGuestcartItemsstart(newData, EditItems.id));
    }
  };

  //console.log(itemData);
  return (
    <div className="product-display-container">
      <div className="product-display-info">
        <div className="produc-display-image">
          <ImageSlideShow images={img ? [img, ...images] : images} />
        </div>

        <div className="product-information">
          <div className="product-display-title">
            <span>{name}</span>
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
              <span className="product-display-price">${price}</span>
            </div>
            <div className="product-display-stock">
              <span className="product-display-stock-label">
                {inStock ? "IN STOCK" : "OUT OF STOCK"}
              </span>
              <span>SKU#: {sku}</span>
            </div>
          </div>

          <div className="product-display-main">
            <div className="product-display-variation">
              {
                // colors and sizes
                options ? (
                  <imageContext.Provider value={{ setImg }}>
                    <ConfigurableProduct
                      configOptions={options}
                      sku={sku}
                      label={true}
                      configItemSetter={configItemSetter}
                      EditItems={
                        EditItems
                          ? {
                              size: EditItems.size,
                              color: EditItems.color,
                            }
                          : EditItems
                      }
                    />
                  </imageContext.Provider>
                ) : null
              }
            </div>

            <div className="product-display-quantity">
              <span>Qty</span>

              <span>
                <input
                  type="number"
                  value={itemData.qty}
                  onChange={(e) =>
                    setItemData({ ...itemData, qty: e.target.value })
                  }
                  className="quantity-input"
                />
              </span>
            </div>

            <div className="product-display-add">
              {EditItems ? (
                <CustomButton
                  className="google-sign-in custom-button"
                  onClickHandle={() => {
                    const validation = validate(itemData);
                    validation === true
                      ? onUpdateItem(itemData)
                      : alert(validation);
                  }}
                >
                  UPDATE CART
                </CustomButton>
              ) : (
                <CustomButton
                  className="google-sign-in custom-button"
                  onClickHandle={() => {
                    const validation = validate(itemData);
                    validation === true
                      ? onPostItem(itemData)
                      : alert(validation);
                  }}
                >
                  Add To Cart
                </CustomButton>
              )}
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
                ADD TO COMPARE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayContainer;
