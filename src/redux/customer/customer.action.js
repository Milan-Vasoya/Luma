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

export const signUpstart = (data) => ({
  type: customerActionType.SIGN_UP_START,
  data
});

export const signInStart = (custData) => ({
  type: customerActionType.SIGN_IN_START,
  custData,
});

export const setError = (error) => ({
  type: customerActionType.SET_ERROR,
  error,
});
