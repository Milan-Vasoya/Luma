import { createSelector } from "reselect";

const selectGuest= (state) =>state.guest;

export const selectCartId = createSelector(
    [selectGuest],
    guest=>guest.cartId
    );
