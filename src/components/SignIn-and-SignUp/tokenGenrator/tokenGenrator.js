import postData from "../../postData/Simple/postdata";
import { signInStart } from "../../../redux/customer/customer.action";

const url =
  "https://m241full.digitsoftsol.co/index.php/rest/V1/integration/customer/token";

const TokenGenrator = (data,dispatch) => {
  return postData(url, data).then((token) => dispatch(signInStart(token)));
};

export default TokenGenrator;
