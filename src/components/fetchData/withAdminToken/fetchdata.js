const adminToken = "41iavztqcxbm1dam5g3aprnjfrgtc7pv";

const fetchdata = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchdata;
