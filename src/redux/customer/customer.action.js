import customerActionType from "./customer.type";

export const setCustomerToken = (token) => ({
  type: customerActionType.SET_CUSTOMER_TOKEN,
  token,
});
export const clearCustomerToken = () => ({
  type: customerActionType.CLEAR_CUSTOMER_TOKEN,
});

export const signOutstart = () => ({
  type: customerActionType.SIGN_OUT_START,
});

export const signUpstart = (username, password) => ({
  type: customerActionType.SIGN_UP_START,
  username,
  password,
});

export const signInStart = (token) => ({
  type: customerActionType.SIGN_IN_START,
  token,
});
