import React, { useEffect, useState } from "react";
import "./RelatedProduct.component.scss";
import RelatedProducTypes from "./types-of-relatedProducts/relatedProduct.types";

const crosssell = [];
const upsell = [];
const related = [];
const RealtedProducts = ({ prodLinks }) => {
  const [state, changeState] = useState(false);
  useEffect(() => {
    prodLinks.forEach((item) => {
      switch (item.link_type) {
        case "related": {
          return related.push(item.linked_product_sku);
        }
        case "crosssell": {
          return crosssell.push(item.linked_product_sku);
        }
        case "upsell": {
          return upsell.push(item.linked_product_sku);
        }
      }
    });
    changeState(!state);
    return () => {
      crosssell = [];
      upsell = [];
      related = [];
    };
  }, []);

  return (
    <div className="related-prod-contaiener">
      <div className="related-prods">
        {
          //reusable prod
        }

        {related.length > 0 ? (
          <div className='rel'>
            <div className="rel-prodtitle">Related Products</div>

            <div className="rel-prod-container">
              {related.map((item) => (
                <RelatedProducTypes key={item} sku={item} />
              ))}
            </div>
          </div>
        ) : null}

        {crosssell.length > 0 ? (
          <div className='rel'>
            <div className="rel-prodtitle">
              We found other products you might like!
            </div>
            <div className="rel-prod-container">
              {crosssell.map((item) => (
                <RelatedProducTypes key={item} sku={item} />
              ))}
            </div>
          </div>
        ) : null}

        {upsell.length > 0 ? (
          <div className='rel'>
            <div className="rel-prodtitle">
              You may also be interested in the following product(s).
            </div>

            <div className="rel-prod-container">
              {upsell.map((item) => (
                <RelatedProducTypes key={item} sku={item} />
              ))}
            </div>
          </div>
        ) : null}

      
      </div>
    </div>
  );
};
export default RealtedProducts;
