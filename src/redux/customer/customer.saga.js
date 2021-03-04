import { takeLatest, put, all, call, select } from "redux-saga/effects";
import customerActionType from "./customer.type";
import Cookies from "js-cookie";
import {
  setCustomerToken,
  clearCustomerToken,
  setError,
} from "./customer.action";
import { clearCartItems, clearQuoteId, setQuoteId } from "../cart/cart.action";
import CookieName from "../../components/Cookies/Cookies.name";
import { selectCustomerToken } from "./customer.selector";

export function* simplePostData(url, data) {
  const res = yield fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status === 200) {
    return res.json();
  } else {
    const error = yield res.json();
    const message = yield error.message;
    throw new Error(message);
  }
}

export function* postDataWithCustToken(url, data = {}) {
  const CustomerToken = yield select(selectCustomerToken);
  const res = yield fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CustomerToken}`,
    },
    body: JSON.stringify(data),
  });

  if (res.status === 200) {
    return res.json();
  } else {
    const error = yield res.json();
    const message = yield error.message;
    throw new Error(message);
  }
}

export function* customerTokenSettter({ custData }) {
  try {
    yield console.log("custmer Token", custData);
    const response = yield simplePostData(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/integration/customer/token`,
      custData
    );
    const custToken = yield response;
    //console.log('[customerSaga]',custToken)
    yield Cookies.set(CookieName.customer_Token, custToken, { expires: 3 });
    yield put(setCustomerToken(custToken));
  } catch (e) {
    yield put(setError(e.message));
  }
}

export function* onSignInStart() {
  yield takeLatest(customerActionType.SIGN_IN_START, customerTokenSettter);
}

export function* signingUp({ data }) {
  try {
    const Response = yield simplePostData(
      `https://m241full.digitsoftsol.co/index.php/rest/V1/customers`,
      data
    );
    const custData = yield Response;
    const dataToToken = {
      username: custData.email,
      password: data.password,
    };
    yield console.log("datatotoken", dataToToken);
    yield customerTokenSettter({ custData: dataToToken });
    const resId = yield postDataWithCustToken(
      `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine`,
      {}
    );
    const quoteId = yield resId;
    yield put(setQuoteId(quoteId));
  } catch (e) {
    yield put(setError(e.message));
  }
}

export function* onSignUpStart() {
  yield takeLatest(customerActionType.SIGN_UP_START, signingUp);
}

export function* customerTokenCleared() {
  yield Cookies.remove(CookieName.customer_Token);
  yield put(clearCustomerToken());
  yield put(clearCartItems());
  yield put(clearQuoteId());
}

export function* onSignOutStart() {
  yield takeLatest(customerActionType.SIGN_OUT_START, customerTokenCleared);
}

export default function* CustomerSaga() {
  yield all([call(onSignInStart), call(onSignOutStart), call(onSignUpStart)]);
}
