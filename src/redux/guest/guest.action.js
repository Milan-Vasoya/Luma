import guestActionType from "./guest.type";


export const clearCartId = () => ({
  type: guestActionType.CLEAR_CART_ID,
});


export const setCartId= (cartId)=>({
    type: guestActionType.SET_CART_ID,
    cartId
  });

export const addGuestCartItemsstart = (itemInfo) => ({
    type:guestActionType.GUEST_ADD_ITEM_TO_CART_START,
    itemInfo
});

// export const addGuestCartItemsSucceess = (cartItem) => ({
//     type:guestActionType.GUEST_ADD_ITEM_TO_CART_SUCCESS,
//     cartItem
// });

export const deleteGuestItemFromCart = (id) => ({
    type:guestActionType.GUEST_DELETE_ITEM_FROM_CART_START,
    id
});


export const setGuestCartItemsStart = (cartItems) => ({
    type:guestActionType.SET_GUEST_CART_ITEMS_START,
    cartItems
});


export const updateGuestcartItemsstart = (cartItem,id) =>({
  type:guestActionType.GUEST_UPDATE_ITEM_To_CART_START,
  cartItem,
  id
});
