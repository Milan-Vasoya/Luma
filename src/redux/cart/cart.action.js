
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



export const updateItemIncartStart= (url,itemInfo,id)=>({
    type:cartActionType.UPDATE_ITEM_IN_CART_START,
    url,itemInfo,id
});

export const updateItemIncartSuccess= (cartItem,id)=>({
    type:cartActionType.UPDATE_ITEM_IN_CART_SUCCESS,
    cartItem,id
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

export const setQuoteId= (id)=>({
    type:cartActionType.SET_QUOTE_ID,
    id
});

export const clearQuoteId= ()=>({
    type:cartActionType.CLEAR_QUOTE_ID,
});

export const setTotalsSuccess = (totals) =>({
type:cartActionType.SET_TOTALS_SUCCESS,
totals
})

export const setTotalsStart =()=>({
    type:cartActionType.SET_TOTALS_START
})