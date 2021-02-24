import React from "react";
import { useRouteMatch,Route } from 'react-router-dom';
import CategoriesWisePage from "../../components/PageCategories/PageCategories.component";
const CatPage = () => {
const match =useRouteMatch();
  return <div> 
  <Route path={`${match.url}/:catId`} component={CategoriesWisePage} />
  </div>;
};

export default CatPage;