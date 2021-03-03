import { all, call } from "redux-saga/effects";

import cartSaga from "./cart/cart.saga";
import CustomerSaga from "./customer/customer.saga";

export default function* rootSaga() {
  yield all([call(CustomerSaga), call(cartSaga)]);
}
