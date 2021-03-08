const CustomerToken = "65optrawfpd1rbxf0f5j4i6dwzp7wjho";
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
  