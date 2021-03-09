import React, { useCallback, useEffect, useState } from "react";
import "./form.cheackout.scss";
import ShippingForm from "../shipping-address/shipping-address";
import BillngForm from "../billing-address/billing-address";
import ChooseShipping from "../shippingMethod/shipping-method";
import postData from "../../postData/withCustomerToken/postData";
import { useSelector } from "react-redux";
import { selectCustomerToken } from "../../../redux/customer/customer.selector";
import { useHistory } from "react-router";

const CheckoutForm = () => {
  const CustomerToken = useSelector(selectCustomerToken);
const history =useHistory()
  const [isBilignSame, setIsBillingSame] = useState(true);
  const INTIAL_STATE = {
    addressInformation: {
      shipping_address: {
        
      },
      billing_address: {},
      shipping_method_code: "",
      shipping_carrier_code: "",
    },
  };

  //here set to null
  //
//here set to null
  const [shippingMethod, setShippingMethod] = useState(null);

  const [addInfo, setAddInfo] = useState(INTIAL_STATE);
  useEffect(() => {
    if (
      addInfo.addressInformation.shipping_address.hasOwnProperty(
        "country_id"
      ) &&
      addInfo.addressInformation.billing_address.hasOwnProperty("country_id")
    ) {
      const {
        region,
        region_id,
        region_code,
        country_id,
      } = addInfo.addressInformation.shipping_address;
      setShippingMethod({ region, region_id, region_code, country_id });
    } else {
    }
  }, [addInfo]);

  const addInfoSetter = (name, value, name2, value2) =>
    setAddInfo({
      ...addInfo,
      addressInformation: {
        ...addInfo.addressInformation,
        [name]: value,
        [name2]: value2,
      },
    });

  console.log("addressInformation", addInfo);

  const onFormSubmit = () => {
    postData(
      `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/shipping-information`,
      addInfo,
      CustomerToken
    )
      .then(() =>history.push('/paySum') )
      .catch((e) => console.log("error [form Checkout]", e));
  };

  return (
    <div className="ch-form-container">
      <div className="ch-form">
        {shippingMethod ? (
          <ChooseShipping
            addInfoSetter={addInfoSetter}
            shipping={shippingMethod}
            onFormSubmit={onFormSubmit}
          />
        ) : isBilignSame ? (
          <ShippingForm
            addInfoSetter={addInfoSetter}
            setIsBillingSame={setIsBillingSame}
          />
        ) : (
          <BillngForm addInfoSetter={addInfoSetter} />
        )}
      </div>
    </div>
  );
};
export default CheckoutForm;
