import React from "react";
import notFound from "../assets/not_found.svg";

function PageNotFound() {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-item-center h-100">
      <div className="image-404">
        <img src={notFound} alt="" />
      </div>
      <p className="pt-4">Sorry, the page you are looking doesn't exist.</p>
    </div>
  );
}

export default PageNotFound;
