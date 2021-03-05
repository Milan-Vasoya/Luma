export const deleteCartItem = (cartItems, deleteItemId) => {
  return cartItems.filter((cartItem) => cartItem.item_id !== deleteItemId);
};

export const updateCartItem = (cartItems, cartItemToUpdate, idToremove) => {
  return cartItems.map((cartItem) =>
    cartItem.item_id === idToremove ? cartItemToUpdate : cartItem
  );
};
