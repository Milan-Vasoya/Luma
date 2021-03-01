import React, { useEffect, useState } from "react";
import "./CartDropDown.component.scss";
import CustomButton from "../../Custom-Component/button/custom-button.component";
import CartItem from "../cartItem/cartItem.component";
import { useDispatch } from "react-redux";
import { toggleHidden } from "../../../redux/cart/cart.action";
import fetchData from "../../fetchData/withCutomerToken/fetchdata";
import { useHistory } from "react-router-dom";

const CartDropDown = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData(
      "https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/items"
    ).then((data) => setCartItems(data));

    return () => {
      setCartItems([]);
    };
  }, []);

 

  return (
    <div className="cart-dropdown ">
      <span
        className="close-drop-down"
        onClick={() => dispatch(toggleHidden())}
      >
        X
      </span>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.item_id} cartItem={cartItem} />
        ))}
      </div>
      <div className="button-container">
        <CustomButton
          onClickHandle={() => alert("checkout added")}
          className="custom-button"
          onClickHandle={() => {
            history.push("/cart");
            dispatch(toggleHidden());
          }}
        >
          GO To CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
