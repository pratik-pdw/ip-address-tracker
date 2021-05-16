import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";
function Searchbox({ getIpInfo, ipDomain, setIpDomain, children }) {
  const [error, setError] = useState(false);

  const ipv4Regex = new RegExp(
    "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$",
    "gm"
  );

  const ipv6Regex = new RegExp(
    "((([0-9a-fA-F]){1,4})\\:){7}([0-9a-fA-F]){1,4}",
    "g"
  );

  const domainRegex = new RegExp(
    "^(?!-)[A-Za-z0-9-]+([\\-\\.]{1}[a-z0-9]+)*\\.[A-Za-z]{2,6}$",
    "g"
  );

  const handleOnChange = (e) => {
    setIpDomain(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ipv4Regex.test(ipDomain)) {
      setError(false);
      console.log("IPv4 Address ");
      getIpInfo(ipDomain, false);
      return;
    }

    if (ipv6Regex.test(ipDomain)) {
      setError(false);
      console.log("IPv6 Address ");
      getIpInfo(ipDomain, false);
      return;
    }

    if (domainRegex.test(ipDomain)) {
      setError(false);
      console.log("Domain Address ");
      getIpInfo(ipDomain, true);
      return;
    }

    setError(true);
  };

  return (
    <div className="searchbox p-small">
      <h3 className="heading-primary text-center mtb-small">
        IP Address Tracker
      </h3>
      <div className="searchbox__searchbar">
        <form className="searchbox__form" onSubmit={handleSubmit}>
          <input
            onChange={handleOnChange}
            value={ipDomain}
            placeholder="Search for any IP Address or Domain"
            type="text"
            className="searchbox__searchbar-text"
          />
          {error && (
            <p
              style={{
                marginTop: ".5rem",
                marginLeft: ".5rem",
                color: "#f3ff61",
                fontWeight: "500",
                fontSize: "1.5rem",
              }}
            >
              Invalid IPv4/IPv6 Address or Domain Name
            </p>
          )}
          <button type="submit" className="searchbox__searchbar-btn">
            <img src={arrow} alt="Arrow" />
          </button>
        </form>
      </div>
      {children}
    </div>
  );
}

export default Searchbox;
