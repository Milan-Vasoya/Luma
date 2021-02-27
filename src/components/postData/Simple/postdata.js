const postdata = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
