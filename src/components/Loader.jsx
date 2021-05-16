import React from "react";
import markerLogo from "../images/icon-location.svg";
function Loader() {
  return (
    <div className="loader">
      <img src={markerLogo} alt="Marker Icon" className="loader__img" />
    </div>
  );
}

export default Loader;
