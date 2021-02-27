import React, { useState } from "react";
import "./loader.styles.scss";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <span className='loader-center'>
      {isLoading ? (
        <div className="loader-container" onClick={()=>setIsLoading(!isLoading)} >
          <div className="loader">Loading...</div>
        </div>
      ) : null}
    </span>
  );
};
export default Loader;
