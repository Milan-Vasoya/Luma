import guestActionType from "./guest.type";

const INITIAL_STATE = {
  cartId:"",
};

const guestResucer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case guestActionType.SET_CART_ID:
      return{
        ...state,
        cartId:action.cartId
      }
    default:
      return state;
  }
};

export default guestResucer;
