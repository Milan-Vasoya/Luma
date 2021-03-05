import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectQuoteId = createSelector(
  [selectCart],
  (cart) => cart.quoteId
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.qty,
      0
    )
);


export const selectCartTotal=createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.qty*cartItem.price,
      0
    )
);