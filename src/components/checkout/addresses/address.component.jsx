import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCustomerToken } from "../../../redux/customer/customer.selector";
import "./address.styels.scss";
import fetchdata from "../../fetchData/withCutomerToken/fetchdata";
import { useHistory } from "react-router";
import CustomButton from "../../Custom-Component/button/custom-button.component";
import ShippingMethods from "../shippingMethod/shipping-method";
import postData from "../../postData/withCustomerToken/postData";

const Addresses = () => {
  const history = useHistory();

  const [shipMethod, setShipMethod] = useState(null);
  const [info, setInfo] = useState({
    shipping_method_code: "",
    shipping_carrier_code: "",
  });
  const addInfoSetter = (name, value, name1, value1) =>
    setShipMethod({ ...info, [name]: value, [name1]: value1 });
  const [addAvil, setAddAvil] = useState(null);

  const CustomerToken = useSelector(selectCustomerToken);
  useEffect(() => {
    if (CustomerToken) {
      fetchdata(
        `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/billing-address`,
        CustomerToken
      )
        .then((res) => setAddAvil(res))
        .catch((e) => console.log("error", e));
    } else {
      history.push("/signIn");
    }
  }, []);

  useEffect(() => {
    if (addAvil) {
      if (!(addAvil.firstname && addAvil.telephone))
        history.push("/checkout/form");
    }
  }, [addAvil]);

  //https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/totals-information
  //this will sended to  this after fetchinf data to fetch full information

  const onFormSubmit = () => {
    const newAddress = {
      addressInformation: {
        shipping_address: { ...addAvil },
        billing_address: { ...addAvil },
        ...shipMethod,
      },
    };
    console.log("newaddress", newAddress);

    postData(
      `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/shipping-information`,
      newAddress,
      CustomerToken
    )
      .then(() => history.push("/paySum"))
      .catch((e) => console.log("error [form Checkout]", e));
  };
  const goToShipMeThods = () => {
    if (addAvil) {
      if (addAvil.firstname && addAvil.telephone) {
        setShipMethod({
          region: addAvil.region,
          region_id: addAvil.region_id,
          region_code: addAvil.region_code,
          country_id: addAvil.country_id,
        });
      }
    }
  };

  console.log(info);

  console.log(addAvil);
  return (
    <div className="address-container">
      <div className="container">
        {shipMethod ? (
          <ShippingMethods
            shipping={shipMethod}
            addInfoSetter={addInfoSetter}
            onFormSubmit={onFormSubmit}
          />
        ) : (
          <div>
            <div className="ch-addresses-header">Shipping Address</div>
            <div className="ch-addresses">
              {addAvil ? (
                <div className="addresses">
                  <span>
                    {addAvil.firstname} {addAvil.lastname}
                  </span>
                  <span className="street">{addAvil.street.join()}</span>
                  <span>
                    {addAvil.city} {addAvil.postcode}
                  </span>
                  <span>{addAvil.country_id}</span>
                  <span>{addAvil.telephone}</span>
                </div>
              ) : null}
            </div>
            <div className="ch-btn-container">
              <CustomButton
                className="google-sign-in custom-button"
                onClickHandle={() => history.push("/checkout/form")}
              >
                Add New Address
              </CustomButton>

              <CustomButton
                className="custom-button"
                onClickHandle={goToShipMeThods}
              >
                Next
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Addresses;
