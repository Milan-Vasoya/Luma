import React, { useEffect } from "react";
import { ReactComponent as ShoppingBag } from "../../../assests/shopping-bag.svg";
import "./cartIcon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleHidden,
  setCartItemsStart,
} from "../../../redux/cart/cart.action";
import { selectCustomerToken } from "../../../redux/customer/customer.selector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const customerToken = useSelector(selectCustomerToken);

  useEffect(() => {
    const setCartItems = () => dispatch(setCartItemsStart());

    if (customerToken) {
      setCartItems();
    }
  }, [customerToken]);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleHidden())}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">45</span>
    </div>
  );
};

export default CartIcon;
