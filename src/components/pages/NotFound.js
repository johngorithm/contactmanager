import React from "react";

const NotFound = props => {
  return (
    <div className="text-center">
      <h1 className="display-4 mb-3 mt-5">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="text-secondary">
        Ooops!, the page you are looking for does not exist
      </p>
    </div>
  );
};

export default NotFound;
