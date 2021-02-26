import React from "react";
import { useParams } from "react-router-dom";
import MasterContainer from "../masterContainer/master.container";
import ProductItem from "../product-item/productItem.component";
import rootCategorie from '../../attributes/rootCategories/RootCategories.atttributes';
const PageNotFound = () => {
  const params = useParams();

  const pageId = rootCategorie[params.catId] ;
  

  return (
    <MasterContainer>
      <ProductItem pageId={pageId} />
    </MasterContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   pageId :(state, abc)=>selectCatId(state,abc)
// });

export default PageNotFound;
