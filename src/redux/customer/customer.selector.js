import { createSelector } from "reselect";

const selectCustomer = (state) => state.customer;

export const selectCustomerToken = createSelector(
  [selectCustomer],
  (customer) => (customer.token ? customer.token : null)
);

export const selectCustError = createSelector(
  [selectCustomer],
  (customer) => customer.error
);
