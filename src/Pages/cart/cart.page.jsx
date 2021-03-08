import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartPageItem from "../../components/cartPage/cartPage.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import "./cart.styles.scss";
import CartSummary from "../../components/cart-summary/cart-summary.component";
import { selectCustomerToken } from "../../redux/customer/customer.selector";
import { setTotalsStart } from "../../redux/cart/cart.action";
import { setGuestTotalsStart } from "../../redux/guest/guest.action";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const CustomerToken = useSelector(selectCustomerToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (CustomerToken) {
      dispatch(setTotalsStart());
    } else {
      dispatch(setGuestTotalsStart());
    }
  }, []);

  // console.log("totals", totals);
  return (
    <div className="cart-container">
      <div className="ca-header">
        <span className="sh-header">Shopping Cart</span>
      </div>
      <div className="sub-container">
        {
          //// summery
        }

        <div className="ca-summary-container">
          <CartSummary />
        </div>

        <div className="cart">
          <form>
            <table className="cart-table">
              <thead className="table-header">
                <tr>
                  <th>
                    <span>Item</span>
                  </th>
                  <th>
                    <span>Price</span>
                  </th>
                  <th>
                    <span>Qty</span>
                  </th>
                  <th>
                    <span>Subtotal</span>
                  </th>
                </tr>
              </thead>

              {cartItems.map((cartItem) => (
                <CartPageItem key={cartItem.item_id} cartItem={cartItem} />
              ))}
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
