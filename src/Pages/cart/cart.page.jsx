import React,{useEffect,useState} from "react";
import CartPageItem from "../../components/cartPage/cartPage.component";
import fetchData from "../../components/fetchData/withCutomerToken/fetchdata";

import "./cart.styles.scss";

const CartPage = () => {

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
