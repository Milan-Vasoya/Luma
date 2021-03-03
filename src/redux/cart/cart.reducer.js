import cartActionType from "./cart.type";
import { deleteCartItem,updateCartItem } from "./cart.utils";
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
    case cartActionType.SET_CART_ITEMS_SUCESS:
      return {
        ...state,
        items: action.items,
      };
      case cartActionType.ADD_ITEM_TO_CART_SUCCESS:
        return{
          ...state,
          items:[...state.items,action.cartItem]
        }
    case cartActionType.CLEAR_CART_ITEMS:
      return {
        ...state,
        items: [],
      };
    case cartActionType.DELETE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        items: deleteCartItem(state.items, action.id),
      };
    case cartActionType.UPDATE_ITEM_IN_CART_SUCCESS:
      return{
        ...state,
        items:updateCartItem(state.items,action.cartItem ,action.id)
      }
    default:
      return state;
  }
};

export default CartReducer;
