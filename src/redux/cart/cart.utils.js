import cartActionType from "./cart.type";

export const deleteCartItem = (cartItems, deleteItemId) => {
  return cartItems.filter((cartItem) => cartItem.item_id !== deleteItemId);
  //   const findItem = cartItems.find(
  //     (cartItem) => cartItem.item_id === deleteItemId
  //   );
  //   if (findItem.qty > 1) {
  //     cartItems.map((cartItem) =>
  //       cartItem.item_id === deleteItemId
  //         ? { ...cartItem, qty: cartItem.qty - 1 }
  //         : cartItem
  //     );
  //   } else {
  //     cartItems.filter((cartItem) => cartItem.item_id !== deleteItemId);
  //   }
};

export const updateCartItem = (cartItems, cartItemToUpdate, idToremove) => {
  return cartItems.map((cartItem) =>
    cartItem.item_id === idToremove ? cartItemToUpdate : cartItem
  );
};
