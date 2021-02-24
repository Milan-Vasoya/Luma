import CategoryPageReducer from "./PageReducer/CategoryPage.reducer";
import {  combineReducers } from 'redux';
import CartReducer from "./cart/cart.reducer";

const RootReducer = combineReducers({
    page:CategoryPageReducer,
    cart:CartReducer
});
export default RootReducer;