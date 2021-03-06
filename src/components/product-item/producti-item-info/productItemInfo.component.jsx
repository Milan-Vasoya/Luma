import React, { useEffect, useState, createContext } from "react";
import "./productItemInfo.styles.scss";
import fetchdata from "../../fetchData/withAdminToken/fetchdata";
import { useHistory } from "react-router-dom";
import ConfigurableProduct from "../../configurableProduct/configurable.product";
import validate from "../../validate/prod-add-on-display";
import { selectQuoteId } from "../../../redux/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { selectCustomerToken } from "../../../redux/customer/customer.selector";
import { addItemToCartStart } from "../../../redux/cart/cart.action";
import { addGuestCartItemsstart } from "../../../redux/guest/guest.action";

const ImagePath = "https://m241full.digitsoftsol.co/pub/media/catalog/product";

export const ProdItemContex = createContext({
  setImage: () => {},
});

const ProductItemInfo = ({ sku }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [config, setConfig] = useState([]);
  const QuoteId = useSelector(selectQuoteId);

  const CustomerToken = useSelector(selectCustomerToken);

  useEffect(() => {
    fetchdata(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/products/${sku}?fields=id,sku,name,type_id,price,media_gallery_entries,extension_attributes[configurable_product_options]`
    ).then((data) => setProduct(data));

    return () => {
      setProduct(null);
    };
  }, [sku]);

  const [image, setImage] = useState("");

  const AddItemToCart = () => {
    const itemData = {
      cartItem: {
       
        sku: product.sku,
        qty: 1,
        name: product.name,
        price: product.price,
        product_type: product.type_id,
        quote_id: QuoteId,
        product_option: {
          extension_attributes: {
            configurable_item_options: config,
          },
        },
      },
    };

    if (validate(itemData.cartItem) === true) {
    
      if (CustomerToken) {
        dispatch(
          addItemToCartStart(
            "https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/items",
            itemData
          )
        );
      } else {
        dispatch(addGuestCartItemsstart(itemData));
      }
    } else {
      // history.push(`/product/${sku}`);
      console.log('validate',validate(itemData))
    }
  };

  let configOptions = null;

  if (product.type_id === "configurable") {
    configOptions = product.extension_attributes.configurable_product_options;
  }

  return (
    <div className="product-item-info">
      <div
        className="product-item-image"
        onClick={() => history.push(`/product/${product.sku}`)}
      >
        {product.id ? (
          <img
            src={`${ImagePath}${
              image ? image : product.media_gallery_entries[0].file
            }`}
            alt="img"
          />
        ) : null}
      </div>
      <div className="product-item-info-container">
        <div className="product-item-name">
          <span className="product-item-name__text">
            {product ? product.name : null}
          </span>
        </div>

        <div className="product-item-price">
          <span className="product-item-name__text">
            Price: <b>{product ? product.price : null}</b>
          </span>
        </div>

        {
          // Colors and sizes

          configOptions ? (
            <ProdItemContex.Provider value={{ setImage }}>
              <ConfigurableProduct
                configOptions={configOptions}
                sku={sku}
                configItemSetter={setConfig}
              />
            </ProdItemContex.Provider>
          ) : null
        }

        <div className="product-item-add-container">
          <div className="product-item-add">
            <div className="hover-toggle">
              <button className="product-item-btn" onClick={AddItemToCart}>
                Add To Cart
              </button>
              <div className="product-item-icon">
                <span className="product-item-icon__icon">
                  <i className="fa fa-heart"></i>
                </span>
                <span className="product-item-icon__icon">
                  <i className="fa fa-exchange"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductItemInfo);
