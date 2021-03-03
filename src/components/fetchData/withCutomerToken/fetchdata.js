const CustomerToken = "w870m6bmxicfvx4flfou0q3udwnbydpf";

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
