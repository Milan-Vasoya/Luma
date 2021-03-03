import React from "react";
import "./productSizes.component.scss";

const ProductSize = ({
  size,
  variationSetter,
  activeSetter: { active, setActive, index },
}) => (
  <div
    className={`sizes-text  ${active.size === size ? "select" : null}  `}
    onClick={() => {
      variationSetter("size", size);
      setActive({ ...active, "size": size });
    }}
  >
    {size}
  </div>
);

export default ProductSize;
