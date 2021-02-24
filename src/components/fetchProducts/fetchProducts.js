const adminToken = "jq77rrk3hru9itryuoemzo9eui7tn2qf";

const fetchProducts = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchProducts;
