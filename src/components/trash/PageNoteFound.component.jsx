import React from "react";
import { Link } from 'react-router-dom';

const PageNotFound = ()=>(
    <div>
    <h1>Page not Found</h1>
    <Link to='/'>Go to HomePage</Link>
    </div>
);

export default PageNotFound;