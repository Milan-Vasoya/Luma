import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import productView from "../../components/productView/productView.component";

const Product = () => {
  const match = useRouteMatch();
  return <Route path={`${match.path}/:sku`} component={productView} />
  ;
};

export default Product;
