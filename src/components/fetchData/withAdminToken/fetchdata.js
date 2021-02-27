const adminToken = "2ituqj5qtiq9f6b40hy7jriz2hkyfqt3";

const fetchdata = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchdata;
