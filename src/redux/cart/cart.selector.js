import { createSelector } from "reselect";

const selectCart= (state) =>state.cart;

export const selectHidden = createSelector(
    [selectCart],
    cart=>cart.hidden
    );