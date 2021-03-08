import React, { useCallback, useEffect, useState } from "react";
import "./cart-summary.component.scss";
import CustomButton from "../Custom-Component/button/custom-button.component";
import { useSelector } from "react-redux";
import { selectCustomerToken } from "../../redux/customer/customer.selector";
import { selectCartId } from "../../redux/guest/guest.selector";
import { selectTotals } from "../../redux/cart/cart.selector";
import {GetCountries,GetRegion} from '../FetechAPIS/Country/country'


const CartSummary = () => {
  const [estTax, setEstTax] = useState(false);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState(null);
  const [estShipping, setEstShipping] = useState();
  const setAvilRegion = useCallback((data) => setRegion(data), [region]);
  const CountriesSetter = useCallback((cs) => setCountries(cs), [countries]);

  const CustomerToken = useSelector(selectCustomerToken);
  const cartId = useSelector(selectCartId);
const totals = useSelector(selectTotals);

  useEffect(() => {
    GetCountries()
      .then((data) => CountriesSetter(data));
  }, []);

  const getCoutryById = (id) => {
    GetRegion(id)
      .then((data) =>
        data.available_regions
          ? setAvilRegion(data.available_regions)
          : setRegion(null)
      );
  };

  const getEstamitedShipping = (region, name) => {
    const id = document.getElementById("country").value;
    const data = region
      ? {
          address: {
            region: region.name,
            region_id: region.id,
            region_code: region.code,
            country_id: id,
          },
        }
      : {
          address: {
            region: name,
            country_id: id,
          },
        };

    if (CustomerToken) {
      fetch(
        `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/estimate-shipping-methods`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CustomerToken}`,
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((tax) => setEstShipping(tax));
    } else {
      fetch(
        `https://m241full.digitsoftsol.co/index.php/rest/V1/guest-carts/${cartId}/estimate-shipping-methods?fields=carrier_title,method_code,carrier_code,method_title,amount`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((tax) => setEstShipping(tax));
    }
  };

  return (
    <div className="summary-container">
      <div className="ca-summary">
        <div className="ca-container-header">
          <strong>Summary</strong>
        </div>

        <div className="ca-container-tax">
          <div className="ca-shopping-tax" onClick={() => setEstTax(!estTax)}>
            <span>Estimate Shipping and Tax</span>

            {estTax ? (
              <span className="arrow-down">
                <i className="fa fa-angle-up" aria-hidden="true"></i>
              </span>
            ) : (
              <span className="arrow-down">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            )}
          </div>
          {estTax ? (
            <div className="eastimated-tax">
              <span>Enter your destination to get a shipping estimate.</span>
              <form>
                <div className="summary-form">
                  <label>Country</label>

                  <select
                    className="selective"
                    id="country"
                    onChange={(e) => getCoutryById(e.target.value)}
                  >
                    {countries
                      ? countries.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.full_name_english}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
                <div className="summary-form">
                  <label>State/Province</label>

                  {region ? (
                    <select
                      className="selective"
                      onChange={(e) =>
                        getEstamitedShipping(JSON.parse(e.target.value))
                      }
                    >
                      {region.map((reg) => (
                        <option key={reg.id} value={JSON.stringify(reg)}>
                          {reg.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      className="selective"
                      onBlur={(e) =>
                        e.target.value.length >2?
                        getEstamitedShipping(undefined, e.target.value):alert('enter state')
                      }
                    />
                  )}
                </div>

                <div className="summary-form">
                  <label>Zip/Postal Code</label>

                  <input type="text" className="selective" />
                </div>

                <div className="shipping-method">
                <dl>
                  {estShipping
                    ? estShipping.map((item, index) => (
                        <span key={index}>
                          <dt>{item.carrier_title}</dt>
                          <dd>
                            <input
                              type="radio"
                              name="abc2"
                              id={item.method_title}
                              value={item.amount}
                            />
                            <label htmlFor={item.method_title}>
                              {item.method_title} <b>${item.amount}</b>{" "}
                            </label>
                          </dd>
                        </span>
                      ))
                    : null}
                    </dl>
                </div>
              </form>
            </div>
          ) : null}
        </div>

        <div className="ca-calc">
          {totals ? (
            <div className="ca-count">
              <span>Subtotal</span>
              <span>${totals.subtotal}</span>
            </div>
          ) : null}

          <div className="ca-count">
            <span>Tax</span>
            
              <span>$0.00</span>
            
          </div>
        </div>

        {totals ? (
          <div className="ca-total-order">
            <span>Order Total</span>
            <span>
              $
              {estShipping
                ? estShipping[0].amount + totals.grand_total
                : totals.grand_total}
            </span>
          </div>
        ) : null}

        <div className="ca-btn-con">
          <CustomButton className="google-sign-in custom-button">
            {" "}
            Proceed to Checkout
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
export default CartSummary;
