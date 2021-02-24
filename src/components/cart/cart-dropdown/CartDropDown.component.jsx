import React from "react";
import "./CartDropDown.component.scss";
import CustomButton from "../../Custom-Component/button/custom-button.component";

const CartDropDown = () => (
  <div className="cart-dropdown ">
    <div className="cart-items">
      my cart Item
      {
        //     cartItems.map((item) => (
        //   <CartItem key={item.id} item={item} />
        // ))
      }
    </div>
    <CustomButton
      onClickHandle={() => alert("checkout added")}
      className="custom-button "
    >
      GO To CHECKOUT
    </CustomButton>
  </div>
);

export default CartDropDown;