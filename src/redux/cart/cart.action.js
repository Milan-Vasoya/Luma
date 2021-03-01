
import cartActionType from "./cart.type";

export const toggleHidden= ()=>({
    type:cartActionType.TOGGLE_HIDDEN
});

export const setCartItems= (items)=>({
    type:cartActionType.SET_CART_ITEMS,
    items
});

export const clearCartItems= ()=>({
    type:cartActionType.CLEAR_CART_ITEMS
});

export const deleteItemFromCart = (id)=>({
    type: cartActionType.DELETE_CART_ITEM,
    id
});