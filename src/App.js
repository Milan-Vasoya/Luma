import React from "react";
import Header from "./components/header/header.component";
// import HomePage from "./components/homePage/homepage.component";

// import Footer from "./components/footer/footer.component";
// import Demo from "./components/trash/demo.component";
import ProductItem from "./components/product-item/productItem.component";
import MasterContainer from "./components/masterContainer/master.container";

import "./core.styles.scss";

const App = () => {
  return (
    <div>
      <Header />
 
      <MasterContainer>
      <ProductItem />
      </MasterContainer>
    </div>
  );
};

export default App;
