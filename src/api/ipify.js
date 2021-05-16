export const getIpInfo = async (ipOrDomain, isDomain) => {
  let requestUrl;
  if (ipOrDomain) {
    if (isDomain) {
      requestUrl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&domain=${ipOrDomain}`;
    } else {
      requestUrl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=${ipOrDomain}`;
    }
  } else {
    requestUrl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`;
  }

  const data = await fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      const { ip, location, isp } = data;
      return {
        ipAddr: ip,
        location: location.city,
        timezone: location.timezone,
        isp: isp,
        lat: location.lat,
        lng: location.lng,
      };
    });
  return data;
};

// export const getOthersInfoByIp = async (ipAddr) => {
//   const data = await fetch(
//     `https://geo.ipify.org/api/v1?apiKey=at_ZHIhMCNRbXExDtZ2Wjg1f4GXGKmrf&ipAddress=${ipAddr}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       const { ip, location, isp } = data;
//       return {
//         ipAddr: ip,
//         location: location.city,
//         timezone: location.timezone,
//         isp: isp,
//         lat: location.lat,
//         lng: location.lng,
//       };
//     });

//   return data;
// };

// export const getOthersInfoByDomain = async (domain) => {
//   const data = await fetch(
//     `https://geo.ipify.org/api/v1?apiKey=at_ZHIhMCNRbXExDtZ2Wjg1f4GXGKmrf&domain=${domain}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       const { ip, location, isp } = data;
//       return {
//         ipAddr: ip,
//         location: location.city,
//         timezone: location.timezone,
//         isp: isp,
//         lat: location.lat,
//         lng: location.lng,
//       };
//     });

//   return data;
// };
