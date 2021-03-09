import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./shippingmethod.scss";
import { selectCustomerToken } from "../../../redux/customer/customer.selector";
import postData from "../../postData/withCustomerToken/postData";
import CustomButton from "../../Custom-Component/button/custom-button.component";

const ShippingMethod = ({ shipping, addInfoSetter ,onFormSubmit}) => {
  const CustomerToken = useSelector(selectCustomerToken);
  const addressInfo = {
    address: {
     ...shipping
    },
  };

  const [estShiping, setEstShipping] = useState(null);
  const [code, setCode] = useState("");
  

  useEffect(() => {
    postData(
      "https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/estimate-shipping-methods",
      addressInfo,
      CustomerToken
    )
      .then((res) => setEstShipping(res))
      .catch((e) => console.log("[shipping Method] error", e));
  }, []);

  useEffect(() => {
    addInfoSetter("shipping_method_code", code, "shipping_carrier_code", code);
  }, [code]);

  console.log("code", code);

  return (
    <div>
      <div className="shipping-header">Choose Shipping Method</div>
      <div>
        <table className="sh-table">
          <tbody>
            {estShiping
              ? estShiping.map((item) => (
                  <tr
                    key={item.carrier_code}
                    onClick={() => setCode(item.carrier_code)}
                  >
                    <td>
                      <input
                        type="radio"
                        name="method"
                        readOnly
                        checked={item.carrier_code === code ? true : false}
                      />
                    </td>
                    <td>${item.amount}</td>
                    <td>{item.method_title}</td>
                    <td>{item.carrier_title}</td>
                  </tr>
                ))
              : null}
            <tr>
              <td colSpan="4">
                <CustomButton className="custom-button" onClickHandle={onFormSubmit}>Next</CustomButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShippingMethod;
