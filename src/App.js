import React from "react";
import Header from "./components/header/header.component";
// import HomePage from "./components/homePage/homepage.component";

// import Footer from "./components/footer/footer.component";
// import Demo from "./components/trash/demo.component";
import ProductItem from "./components/product-item/productItem.component";
import MasterContainer from "./components/masterContainer/master.container";
//import Sidebar from "./components/sidebar/sidebar.components";
import { Route, Switch } from "react-router-dom";
import SignInSignUpPage from "./Pages/SignIn and Signup page/signIn-SignUp.page";
import "./core.styles.scss";
import PageNoteFound from "./components/trash/PageNoteFound.component";
// import Image from "./components/ImageSlideShow/imageSlideshow.componenet";
import ProductDisplay from "./components/Product-display-container/Product-display-cotainer.component";
import ProductTab from "./components/product-tab/product-tab.components";
// import data from "./attributes/Colors/Colors.attributes";
import CatPage from "./Pages/catPage/catPage.component";
import product from "./Pages/product/product";
import cartPage from "./Pages/cart/cart.page";
import PublicRoute from "./components/routing/Public.Route";
import Cookies from "js-cookie";
import { store } from "./redux/store";
import demo from "./components/trash/demo.component";
import { selectCustomerToken } from "./redux/customer/customer.selector";
import { useSelector } from "react-redux";



//set Token
store.getState().customer.token = Cookies.get("customer_token");
// const abc = Cookies.get("customer_token");
// console.log("[app.js]  cookie", abc);

const App = () => {
  const custToken=useSelector(selectCustomerToken);
  sessionStorage.setItem('customerToken',custToken)

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/prod" component={ProductTab} />

        <Route
          path="/"
          exact={true}
          render={() => (
            <MasterContainer>
              <ProductItem />
            </MasterContainer>
          )}
        />
        <Route path="/prodDisplay" component={ProductDisplay} />
        <Route path="/product" component={product} />
        <Route path="/catPage" component={CatPage} />
        <Route path="/cart" component={cartPage} />
        <Route path="/demo" component={demo}  />

        <PublicRoute path="/signIn" component={SignInSignUpPage} />
        <Route component={PageNoteFound} />
      </Switch>
    </div>
  );
};

export default App;
