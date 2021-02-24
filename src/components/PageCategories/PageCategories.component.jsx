import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIdFromAttr } from "../../redux/PageReducer/categoryPage.selector";
import MasterContainer from "../masterContainer/master.container";
import ProductItem from "../product-item/productItem.component";
const PageNotFound = () => {
  const params = useParams();

  const pageId = useSelector((state) => selectIdFromAttr(state, params.catId));
  console.log("[subCat]", pageId);

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
