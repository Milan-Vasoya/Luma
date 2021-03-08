export const deleteCartItem = (cartItems, deleteItemId) => {
  return cartItems.filter((cartItem) => cartItem.item_id !== deleteItemId);
};

export const updateCartItem = (cartItems, cartItemToUpdate, idToremove) => {
  return cartItems.map((cartItem) =>
    cartItem.item_id === idToremove ? cartItemToUpdate : cartItem
  );
};

export const addCartitem = (cartItems, newItem) => {
  const existsItem = cartItems.find(
    (cartItem) => cartItem.item_id === newItem.item_id
  );

  if (existsItem) {
   return cartItems.map((cartItem) =>
      cartItem.item_id === newItem.item_id ? newItem : cartItem
    );
  } else {
    return [...cartItems, newItem];
 }
};
