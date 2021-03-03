import Cookies from 'js-cookie';

let token = Cookies.get("customer_token");
let CustomerToken = token?token: "jowt6dd03ofw8k7acb8n05hjklhfueym";



const fetchdata = (url) => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${CustomerToken}`,
    },
  }).then((res) => ({ status: res.status, response: res.json() }))
  .then(({ status, response }) =>
    status === 200
      ? response
      : response.then((err) => {
          throw err.message;
        })
  )
};

export default fetchdata;
