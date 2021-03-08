import { takeLatest, put, all, call, select } from "redux-saga/effects";
import {
  addItemTocartSuccess,
  deleteItemFromCartSuccess,
  updateItemIncartSuccess,
  setCartItemSuccess,
  setTotalsSuccess,
} from "../cart/cart.action";
import { setCartId } from "./guest.action";
import { selectCartId } from "./guest.selector";
import guestActionType from "./guest.type";

export function* simpleFetchdata(url) {
  const res = yield fetch(url);

  if (res.status === 200) {
    return res.json();
  } else {
    const error = yield res.json();
    const message = yield error.message;
    throw new Error(message);
  }
}

export function* updateGuestData(url, data) {
  const res = yield fetch(url, {
    method: "PUT",
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

export function* deleteItemFromGuestCart(url) {
  const res = yield fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
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

export function* simplePostData(url, data = {}) {
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

export function* cartIdSelector() {
  let cartId = yield select(selectCartId);
  if (!cartId) {
    const genratedGuestCart = yield simplePostData(
      `https://m241full.digitsoftsol.co/index.php/rest/all/V1/guest-carts`,
      {}
    );
    cartId = yield genratedGuestCart;
  }
  return cartId;
}

export function* deletGuestItemFromCart({ id }) {
  const cartId = yield cartIdSelector();
  try {
    const response = yield deleteItemFromGuestCart(
      `https://m241full.digitsoftsol.co/index.php/rest/all/V1/guest-carts/${cartId}/items/${id}`
    );
    const deletedItem = yield response;
    if (deletedItem === true) {
      yield put(deleteItemFromCartSuccess(id));
    }
    //yield console.log('[guestsaga]',deletedItem)
  } catch (e) {
    yield console.log("[GuestSaga] error", e.message);
  }
}

export function* onGuestDeleteItemFromCart() {
  yield takeLatest(
    guestActionType.GUEST_DELETE_ITEM_FROM_CART_START,
    deletGuestItemFromCart
  );
}

export function* updateGuestItem({ cartItem, id }) {
  const cartId = yield cartIdSelector();
  try {
    const response = yield updateGuestData(
      `https://m241full.digitsoftsol.co/index.php/rest/all/V1/guest-carts/${cartId}/items/${id}`,
      cartItem
    );
    const ItemToUpdate = yield response;
    // yield console.log('[guestSaGa] TITEMTOUPDATE', ItemToUpdate )
    yield put(updateItemIncartSuccess(ItemToUpdate, id));
  } catch (e) {
    yield console.log("[GuestSaga] error", e.message);
  }
}

export function* onGuestupdateItemToCart() {
  yield takeLatest(
    guestActionType.GUEST_UPDATE_ITEM_To_CART_START,
    updateGuestItem
  );
}

export function* addGuestCartItems({ itemInfo }) {
  const cartId = yield cartIdSelector();
  yield put(setCartId(cartId));

  console.log("cartId", cartId);

  try {
    const response = yield simplePostData(
      `https://m241full.digitsoftsol.co/index.php/rest/all/V1/guest-carts/${cartId}/items`,
      itemInfo
    );
    const addedItem = yield response;
    yield console.log("addedItem", addedItem);

    yield put(addItemTocartSuccess(addedItem));
  } catch (e) {
    yield console.log("[GuestSaga] error", e);
  }
}

export function* onGuestAddCartItem() {
  yield takeLatest(
    guestActionType.GUEST_ADD_ITEM_TO_CART_START,
    addGuestCartItems
  );
}

export function* setGuestcartItems() {
  const cartId = yield select(selectCartId);

  if (cartId) {
    const response = yield simpleFetchdata(
      `https://m241full.digitsoftsol.co/index.php/rest/all/V1/guest-carts/${cartId}/items`
    );

    const GuestItems = yield response;
    yield put(setCartItemSuccess(GuestItems));
  }
}

export function* onSetGuestCartItems() {
  yield takeLatest(
    guestActionType.SET_GUEST_CART_ITEMS_START,
    setGuestcartItems
  );
}

export function* setGuestTotals() {
  const cartId = yield select(selectCartId);
  try {
    const response = yield simpleFetchdata(
      `https://m241full.digitsoftsol.co/index.php/rest/default/V1/guest-carts/${cartId}/payment-information?fields=totals[grand_total,subtotal]`
    );
    const { totals } = yield response;
    yield console.log("totals", totals);

    yield put(setTotalsSuccess(totals));
  } catch (e) {
    yield console.log("[GuestSaga] error", e.message);
  }
}

export function* onSetGuestTotalsStart() {
  yield takeLatest(guestActionType.SET_GUEST_TOTLAS_START, setGuestTotals);
}

export default function* GuestSaga() {
  yield all([
    call(onGuestAddCartItem),
    call(onGuestDeleteItemFromCart),
    call(onGuestupdateItemToCart),
    call(onSetGuestCartItems),
    call(onSetGuestTotalsStart),
  ]);
}
