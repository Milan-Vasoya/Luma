
const adminToken = "arzat39plxoysleqaq9ex1myc6j4rd4a";

const fetchdata = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  }).then((res) => res.json());
};

export default fetchdata;
