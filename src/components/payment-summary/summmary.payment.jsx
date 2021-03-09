import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectCustomerToken } from "../../redux/customer/customer.selector";
import "./payment.summary.scss";
import fetchdata from "../fetchData/withCutomerToken/fetchdata";
import { selectCartItems } from "../../redux/cart/cart.selector";
import SummaryItem from "./summary-item/summary-Item";
import CustomButton from "../Custom-Component/button/custom-button.component";

const PaymentSummary = () => {
  const CustomerToken = useSelector(selectCustomerToken);
  const history = useHistory();
  const [payInfo, setPayInfo] = useState(null);
  const [code, setCode]= useState("");
  const cartItems = useSelector(selectCartItems);
  useEffect(() => {
    if (CustomerToken) {
      fetchdata(
        `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/payment-information`,
        CustomerToken
      )
        .then((res) => setPayInfo(res))
        .catch((e) => console.log("[payment Summary]", e));
    } else {
      history.push("/signIn");
    }
  }, []);

  console.log('[paymentsummry]',payInfo);
  console.log('[paymentsummry]',code);
  

  return (
    <div className="pay-sum-container">
      <div className="container">
        <div className="payment-summary">
          <div className="pay-sum-header">Payment Summary</div>
          <div className="summary-body">
            <table className="tbl">
              {cartItems
                ? cartItems.map((cartItem) => (
                    <SummaryItem key={cartItem.item_id} cartItem={cartItem} />
                  ))
                : null}
            </table>

            <div className="sum-segment-con">
              <div className="segment-container">
                <div className="segmetns">
                  <table className="seg-tabl">
                    <tbody>
                      {payInfo
                        ? payInfo.totals.total_segments.map((item) => (
                            <tr key={item.code}>
                              <td>{item.title}</td>
                              <td>${Math.abs(item.value)}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>

                <div className="payment-methods">
                  <span className="payment-header">Payment Methods</span>
                  <table className="paymnent-tbl">
                    <tbody>
                      {payInfo
                        ? payInfo.payment_methods.map((item) => (
                            <tr key={item.code} onClick={()=>setCode(item.code)} >
                              <td>
                                <input type="radio" name='paymentMethod' readOnly checked={item.code===code?true:false} />
                              </td>
                              <td>{item.title}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>

                          <div className='cust-button'>
                          <CustomButton className="google-sign-in custom-button">Pay {payInfo?"$"+payInfo.totals.base_grand_total:null}</CustomButton>
                          </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
