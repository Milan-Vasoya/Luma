const adminToken = "1gn085tyx58da2std5jr78poo72y6yba";

const fetchProducts = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchProducts;
