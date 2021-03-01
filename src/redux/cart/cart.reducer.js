import cartActionType from "./cart.type";
import { deleteCartItem } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.SET_CART_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case cartActionType.CLEAR_CART_ITEMS:
      return {
        ...state,
        items: [],
      };
    case cartActionType.DELETE_CART_ITEM:
      return {
        ...state,
        items: deleteCartItem(state.items, action.id),
      };
    default:
      return state;
  }
};

export default CartReducer;
