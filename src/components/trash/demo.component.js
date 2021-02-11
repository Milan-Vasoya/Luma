import React from "react";
import "./demo.styles.scss";

class Demo extends React.Component {
  state = {
    data: {},
  };
  componentDidMount() {
    fetch(
      "https://m241full.digitsoftsol.co/index.php/rest/all/V1/products-render-info?searchCriteria%5BpageSize%5D=10&storeId=1&currencyCode=usd"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  //   item.price_info.final_price  item.images[0].url
  render() {
    const data = this.state.data.items;

    return (
      <div className="product-item">
        {data
          ? data.map((item) => (
              <div className="product-item-info" key={item.id}>
                <div className="product-image">
                  <img src={`${item.images[0].url}`}  alt='img'/>
                </div>
                <div className="product-info">
                  <span>{item.name}</span>

                  <span>Price:{item.price_info.final_price}</span>
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Demo;
