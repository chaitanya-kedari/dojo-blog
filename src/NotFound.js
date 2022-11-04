import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>;
            <h3>Page you are looking for is not available</h3>;
            <Link to="/">Click here to redirect to home page</Link>;
        </div>
    );
}
 
export default NotFound;