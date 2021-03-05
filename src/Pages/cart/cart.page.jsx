import React from "react";
import { useSelector } from "react-redux";
import CartPageItem from "../../components/cartPage/cartPage.component";
import { selectCartItems   } from "../../redux/cart/cart.selector";
import "./cart.styles.scss";

const CartPage = () => {

  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-container">
      <div className="sub-container">
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
