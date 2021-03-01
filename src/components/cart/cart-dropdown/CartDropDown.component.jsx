import React from "react";
import "./CartDropDown.component.scss";
import CustomButton from "../../Custom-Component/button/custom-button.component";
import CartItem from "../cartItem/cartItem.component";
import { useDispatch, useSelector } from "react-redux";
import { toggleHidden } from "../../../redux/cart/cart.action";
import { useHistory } from "react-router-dom";
import { selectCartItems } from "../../../redux/cart/cart.selector";


const CartDropDown = () => {
  const dispatch = useDispatch();
  const history = useHistory(); 

  const cartItems = useSelector(selectCartItems);

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
