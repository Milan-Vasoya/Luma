
const adminToken = "tg9nso3ba0ei5bmon01o99gcr7w0dcbd";

const fetchdata = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchdata;
