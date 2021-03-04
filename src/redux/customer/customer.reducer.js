import customerActionType from "./customer.type";

const INITIAL_STATE = {
  token: "",
  error: "",
};

const CustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case customerActionType.SET_CUSTOMER_TOKEN:
      return {
        ...state,
        token: action.token,
        error: "",
      };
    case customerActionType.CLEAR_CUSTOMER_TOKEN:
      return {
        ...state,
        token: "",
        error: "",
      };
    case customerActionType.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default CustomerReducer;
