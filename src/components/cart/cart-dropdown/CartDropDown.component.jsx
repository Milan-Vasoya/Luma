import React from "react";
import "./CartDropDown.component.scss";
import CustomButton from "../../Custom-Component/button/custom-button.component";
import CartItem from "../cartItem/cartItem.component";
import { useDispatch, useSelector } from "react-redux";
import { toggleHidden } from "../../../redux/cart/cart.action";
import { useHistory } from "react-router-dom";
import { selectCartItems, selectCartItemsCount } from "../../../redux/cart/cart.selector";

const CartDropDown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
const itemCount = useSelector(selectCartItemsCount);
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
        {itemCount>0? cartItems.map((cartItem,index) => (
          <CartItem key={index} cartItem={cartItem} />
        )):
      <span className='empty-cart'>
      Nothing In the Cart
      </span>
      
      }
      </div>
      <div className="button-container">
        <CustomButton
          className="custom-button"
          onClickHandle={() => {
            history.push("/cart");
            dispatch(toggleHidden());
          }}
        >
          GO TO CART
        </CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
