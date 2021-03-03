const CustomerToken = "w870m6bmxicfvx4flfou0q3udwnbydpf";
const postdata = (url, data) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${CustomerToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => ({ status: res.status, response: res.json() }))
      .then(({ status, response }) =>
        status === 200
          ? response
          : response.then((err) => {
              throw err.message;
            })
      );
  };
  
  export default postdata;
  