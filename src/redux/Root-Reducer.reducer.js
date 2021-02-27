import {  combineReducers } from 'redux';
import CartReducer from "./cart/cart.reducer";
import CustomerReducer from "./customer/customer.reducer";


const RootReducer = combineReducers({
    cart:CartReducer,
    customer:CustomerReducer
});


export default RootReducer;