import React from "react";
import { useRouteMatch,Route } from 'react-router-dom';
import demoComponent from "../../components/trash/demo.component";
const CatPage = () => {
const match =useRouteMatch();
  return <div> 
  <Route path={`${match.url}/:catId`} component={demoComponent} />
  </div>;
};

export default CatPage;