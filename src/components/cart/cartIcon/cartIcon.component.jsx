import React, { useEffect } from "react";
import { ReactComponent as ShoppingBag } from "../../../assests/shopping-bag.svg";
import "./cartIcon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleHidden,
  setCartItemsStart,
} from "../../../redux/cart/cart.action";
import { selectCustomerToken } from "../../../redux/customer/customer.selector";
import { selectCartId } from "../../../redux/guest/guest.selector";
import {  setGuestCartItemsStart} from "../../../redux/guest/guest.action";
import { selectCartItemsCount } from "../../../redux/cart/cart.selector";


const CartIcon = () => {
  const dispatch = useDispatch();
  const customerToken = useSelector(selectCustomerToken);
  const cartId = useSelector(selectCartId);
  const totalCount = useSelector(selectCartItemsCount)

  useEffect(() => {
    const setCartItems = () => dispatch(setCartItemsStart());

    if (customerToken) {
      setCartItems();
    }
  }, [customerToken]);

  useEffect(() => {
    if (cartId && (!customerToken)) {
      dispatch(setGuestCartItemsStart())
    }
  }, [cartId]);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleHidden())}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{totalCount}</span>
    </div>
  );
};

export default CartIcon;
