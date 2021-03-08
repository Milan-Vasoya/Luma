import React from "react";
import { useRouteMatch,Route } from 'react-router-dom';
import CheckOutForm from "../../components/checkout/checkout-form/form.checkout";


const Checkout = () => {
const match =useRouteMatch();
  return <div> 
<Route exact path={`${match.path}/form`} component={CheckOutForm} />
                        
  </div>;
};

export default Checkout;