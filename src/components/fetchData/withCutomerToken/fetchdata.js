
const CustomerToken = "nulelfz30d3rpyu8ev78houmpjlnyarz";


const fetchdata = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${CustomerToken}`,
    },
  })
    .then((res) => ({ status: res.status, response: res.json() }))
    .then(({ status, response }) =>
      status === 200
        ? response
        : response.then((err) => {
            throw err.message;
          })
    )
};

export default fetchdata;
