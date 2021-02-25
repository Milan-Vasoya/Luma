import React from "react";
import "./CartDropDown.component.scss";
import CustomButton from "../../Custom-Component/button/custom-button.component";
import CartItem from "../cartItem/cartItem.component";
import { useDispatch } from 'react-redux';
import { toggleHidden } from "../../../redux/cart/cart.action";
const CartDropDown = () =>{ 
  const dispatch = useDispatch();
  return (
  <div className="cart-dropdown ">
  <span className='close-drop-down' onClick={()=>dispatch(toggleHidden())}>X</span>
    <div className="cart-items">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
    <div className='button-container'>
    <CustomButton
      onClickHandle={() => alert("checkout added")}
      className="custom-button "
    >
      GO To CHECKOUT
    </CustomButton>
    </div>
  </div>
);}

export default CartDropDown;
