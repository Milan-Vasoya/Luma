import React, { useEffect, useState, useCallback } from "react";
import "./billing-address.styles.scss";
import FormInput from "../../Custom-Component/Form-input/form-input.component";
import FormArea from "../../Custom-Component/FormTextArea/formTextArea.component";
import FormSelect from "../../Custom-Component/formSelect/formSelect.component";
import CustomButton from "../../Custom-Component/button/custom-button.component";
import { GetCountries, GetRegion } from "../../FetechAPIS/Country/country";


const BillingAddress = ({ addInfoSetter }) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState(null);

  const setAvilRegion = useCallback((data) => setRegions(data), [regions]);
  const CountriesSetter = useCallback((cs) => setCountries(cs), [countries]);

  useEffect(() => {
    GetCountries().then((data) => CountriesSetter(data));
  }, []);

  const INITIAL_STATE = {
    postcode: "",
    city: "",
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    postcode: "",
    telephone: "",
    region: "",
    region_id: null,
    region_code: null,
    country_id: "",
    street: [],
  };

  const [address, setAddress] = useState(INITIAL_STATE);

  const {
    city,
    firstname,
    lastname,
    email,
    company,
    postcode,
    telephone,
    region,
    street,
  } = address;

  const getRegionById = (id) => {
    setAddress({ ...address, country_id: id });
    GetRegion(id).then((data) =>
      data.available_regions
        ? setAvilRegion(data.available_regions)
        : setRegions(null)
    );
  };

  const onChangeRegion = (reg) => {
    setAddress({
      ...address,
      region_id: reg.id,
      region_code: reg.code,
      region: reg.name,
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "street") {
      setAddress({ ...address, [name]: value.split(",") });
    } else {
      setAddress({ ...address, [name]: value });
    }
  };

  const onFromSubmit = (e) => {
    e.preventDefault();
    addInfoSetter("billing_address",address)

  };

  return (
    <div className="shippig-from">
      <div className="shippng-header">Add Billing Address</div>
      <form onSubmit={onFromSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChangeHandler={onInputChange}
          label="Email*"
          required
        />

        <FormInput
          type="text"
          name="firstname"
          value={firstname}
          onChangeHandler={onInputChange}
          label="First Name*"
          required
        />

        <FormInput
          type="text"
          name="lastname"
          value={lastname}
          onChangeHandler={onInputChange}
          label="Last Name*"
          required
        />

        <FormInput
          type="text"
          name="company"
          value={company}
          onChangeHandler={onInputChange}
          label="Company"
        />

        <FormArea
          type="text"
          name="street"
          value={street.join()}
          onChangeHandler={onInputChange}
          label="Street Address*"
        />

        <FormSelect
          name="Country"
          required
          label="Select Country*"
          onChangeHandler={(e) => getRegionById(e.target.value)}
        >
          {countries
            ? countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.full_name_english}
                </option>
              ))
            : null}
        </FormSelect>

        {regions ? (
          <FormSelect
            name="State/Province"
            required
            label="State/Province*"
            onChangeHandler={(e) => onChangeRegion(JSON.parse(e.target.value))}
          >
            {regions.map((reg) => (
              <option key={reg.id} value={JSON.stringify(reg)}>
                {reg.name}
              </option>
            ))}
          </FormSelect>
        ) : (
          <FormInput
            name="region"
            value={region}
            onChangeHandler={onInputChange}
            required
            label="State/Province*"
          />
        )}

        <FormInput
          name="city"
          value={city}
          onChangeHandler={onInputChange}
          required
          label="City*"
        />

        <FormInput
          name="postcode"
          value={postcode}
          onChangeHandler={onInputChange}
          required
          label="Zip/Postal Code*"
        />
        <FormInput
          name="telephone"
          value={telephone}
          onChangeHandler={onInputChange}
          required
          label="Phone Number*"
        />
      
        <CustomButton className="custom-button btn">Next</CustomButton>
      </form>
    </div>
  );
};
export default BillingAddress;
