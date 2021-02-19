const adminToken = "au56pg9wvr13idb8jugkkky0g8rbkzn8";

const fetchProducts = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchProducts;
