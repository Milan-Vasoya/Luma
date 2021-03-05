import { takeLatest, put, all, call, select } from "redux-saga/effects";
import cartActionType from "./cart.type";
import { selectCustomerToken } from "../customer/customer.selector";
import {
  setCartItemSuccess,
  deleteItemFromCartSuccess,
  addItemTocartSuccess,
  updateItemIncartSuccess,
  setQuoteId,
} from "../cart/cart.action";
import { signOutstart } from "../customer/customer.action";

export function* updateDataWithCustToken(url, data) {
  const CustomerToken = yield select(selectCustomerToken);
  const res = yield fetch(url, {
    method: "PUT",
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

export function* deleteDataCartItem(url) {
  // yield console.log(url)
  const CustomerToken = yield select(selectCustomerToken);
  const res = yield fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${CustomerToken}`,
    },
  });
  // yield console.log(res)
  if (res.status === 200) {
    return res.json();
  } else {
    const error = yield res.json();
    const message = yield error.message;
    throw new Error(message);
  }
}

export function* postDataWithCustToken(url, data) {
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

export function* fecthCustomerData(url) {
  const CustomerToken = yield select(selectCustomerToken);
  const res = yield fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${CustomerToken}`,
    },
  });

  if (res.status === 200) {
    return res.json();
  } else {
    const error = yield res.json();
    const message = yield error.message;
    throw new Error(message);
  }
}

export function* deletItemFromCart({ id, url }) {
  try {
    const response = yield deleteDataCartItem(url);
    yield ("response", response);
    const deletedItem = yield response;
    yield console.log("deletedItem", deletedItem);
    if (deletedItem === true) {
      yield put(deleteItemFromCartSuccess(id));
    }
  } catch (e) {
    yield console.log("[cartSaga] error", e);
  }
}

export function* onDeleteItemFromCartStart() {
  yield takeLatest(
    cartActionType.DELETE_ITEM_FROM_CART_START,
    deletItemFromCart
  );
}

export function* addItemTocart({ url, itemInfo }) {
  try {
    const cartItem = yield postDataWithCustToken(url, itemInfo);
    const itemToadd = yield cartItem;

    yield put(addItemTocartSuccess(itemToadd));
  } catch (e) {
    yield console.log("[cartSaga] error", e);
  }
}

export function* onAddItemToCartStart() {
  yield takeLatest(cartActionType.ADD_ITEM_TO_CART_START, addItemTocart);
}

export function* updateItemIncart({ url, itemInfo, id }) {
  try {
    const cartItem = yield updateDataWithCustToken(url, itemInfo);
    const itemToUpdate = yield cartItem;
    console.log("update Item", itemToUpdate);
    yield put(updateItemIncartSuccess(itemToUpdate, id));
  } catch (e) {
    yield console.log("[cartSaga] error", e);
  }
}

export function* onUpdateItemInCartStart() {
  yield takeLatest(cartActionType.UPDATE_ITEM_IN_CART_START, updateItemIncart);
}

export function* SetCartItems() {
  try {
    const cartItems = yield fecthCustomerData(
      "https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/items"
    );
    const Itemdata = yield cartItems;

    yield put(setCartItemSuccess(Itemdata));
  } catch (e) {
    yield console.log(
      e.message.includes("Current customer does not have an active cart"),
      "[cartSaga] error",
      e.message
    );

    if (!e.message.includes("Current customer does not have an active cart")) {
      yield put(signOutstart());
    }
  } finally {
    const response = yield fecthCustomerData(
      `https://m241full.digitsoftsol.co/index.php/rest/default/V1/carts/mine/?fields=id`
    );
    const quoteId = yield response;
    yield put(setQuoteId(quoteId.id));
  }
}

export function* onSetCartItemsStart() {
  yield takeLatest(cartActionType.SET_CART_ITEMS_START, SetCartItems);
}

export default function* CustomerSaga() {
  yield all([
    call(onSetCartItemsStart),
    call(onAddItemToCartStart),
    call(onDeleteItemFromCartStart),
    call(onUpdateItemInCartStart),
  ]);
}
