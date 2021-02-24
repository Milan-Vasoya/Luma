import React from "react";
import { useRouteMatch,Route } from 'react-router-dom';
import CategoriesWisePage from "../../components/PageCategories/PageCategories.component";
const CatPage = () => {
const match =useRouteMatch();
  return <div> 
  <Route exact path={`${match.path}/:catId`} component={CategoriesWisePage} />
  </div>;
};

export default CatPage;