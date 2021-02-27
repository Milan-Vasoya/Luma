import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCustomerToken } from "../../redux/customer/customer.selector";
const PublicRoute = ({ component: Component, ...rest }) => {
  const token = useSelector(selectCustomerToken);

  return (
    <Route
      {...rest}
      component={(props) =>
        token ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
