
import cartActionType from "./cart.type";

export const toggleHidden= ()=>({
    type:cartActionType.TOGGLE_HIDDEN
});

export const setCartItemSuccess= (items)=>({
    type:cartActionType.SET_CART_ITEMS_SUCESS,
    items
});

export const setCartItemsStart= ()=>({
    type:cartActionType.SET_CART_ITEMS_START,

});

export const addItemToCartStart= (url,itemInfo)=>({
    type:cartActionType.ADD_ITEM_TO_CART_START,
    url,
    itemInfo
}) 

export const addItemTocartSuccess= (cartItem)=>({
    type:cartActionType.ADD_ITEM_TO_CART_SUCCESS,
    cartItem
});

export const clearCartItems= ()=>({
    type:cartActionType.CLEAR_CART_ITEMS
});

export const deleteItemFromCartSuccess = (id)=>({
    type: cartActionType.DELETE_ITEM_FROM_CART_SUCCESS,
    id
});

export const deleteItemFromCartStart = (id, url)=>({
    type: cartActionType.DELETE_ITEM_FROM_CART_START,
    id,
    url
});