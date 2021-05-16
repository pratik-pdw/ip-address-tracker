import React from "react";

function IPInfo(props) {
  const { ipAddr, location, timezone, isp } = props.ipInfo;
  return (
    <div className="ipinfo p-medium">
      <div className="ipinfo-box">
        <h3 className="heading-secondary">Ip Address</h3>
        <p className="ipinfo__content">{ipAddr}</p>
      </div>
      <div className="ipinfo-box">
        <h3 className="heading-secondary">Location</h3>
        <p className="ipinfo__content">{location ? location : "N/A"}</p>
      </div>
      <div className="ipinfo-box">
        <h3 className="heading-secondary">Timezone</h3>
        <p className="ipinfo__content">
          {" "}
          {timezone ? `UTC ${timezone}` : "N/A"}
        </p>
      </div>
      <div className="ipinfo-box">
        <h3 className="heading-secondary">ISP</h3>
        <p className="ipinfo__content">{isp ? isp : "N/A"}</p>
      </div>
    </div>
  );
}

export default IPInfo;
