import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import IPInfo from "./components/IPInfo";
import DisplayMap from "./components/DisplayMap";
import "./sass/main.scss";
import "leaflet/dist/leaflet.css";
import Loader from "./components/Loader";
import { getIpInfo as getIpOrDomainInfo } from "./api/ipify";

function App() {
  const [ipInfo, setIpInfo] = useState({});
  const [ipDomain, setIpDomain] = useState("");

  useEffect(() => {
    setIpInfo({ loading: true });
    getIpOrDomainInfo().then((data) => {
      setIpInfo({ ...data, loading: false });
    });
  }, []);

  const getIpInfo = (ipAddr, isDomain) => {
    setIpInfo({ ...ipInfo, loading: true });
    getIpOrDomainInfo(ipAddr, isDomain).then((data) => {
      // console.log(data);
      setIpInfo({ ...data, loading: false });
    });
  };

  if (ipInfo.loading) {
    return <Loader />;
  }

  return (
    <>
      <SearchBox
        getIpInfo={getIpInfo}
        ipDomain={ipDomain}
        setIpDomain={setIpDomain}
      >
        <IPInfo ipInfo={ipInfo} />
      </SearchBox>
      <DisplayMap coordinates={{ lat: ipInfo.lat, lng: ipInfo.lng }} />
    </>
  );
}

export default App;
