const adminToken = "tktz2kdbhxh0y8kvv6z9qywt5dk77fe6";

const fetchProducts = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchProducts;
