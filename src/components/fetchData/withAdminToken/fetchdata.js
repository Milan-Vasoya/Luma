const adminToken = "m1pb1c5up68btc5vue0nv5nfm877f0pv";

const fetchdata = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchdata;
