const CustomerToken = "m94e039qmy2rnqmku1wy2z9svirk0rbo";

const fetchdata = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${CustomerToken}`,
    },
  }).then((res) => res.json());
};

export default fetchdata;
