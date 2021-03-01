import React, { useEffect } from "react";
import { ReactComponent as ShoppingBag } from "../../../assests/shopping-bag.svg";
import "./cartIcon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleHidden, setCartItems } from "../../../redux/cart/cart.action";
import { signOutstart } from "../../../redux/customer/customer.action";
import fetchData from "../../fetchData/withCutomerToken/fetchdata";
import { selectCustomerToken } from "../../../redux/customer/customer.selector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const customerToken = useSelector(selectCustomerToken);

  useEffect(() => {
    const getData = () => {
      fetchData(
        "https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/items"
      )
        .then((data) => dispatch(setCartItems(data)))
        .catch((e) => dispatch(signOutstart()));
    };

    if (customerToken) {
      getData();
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
