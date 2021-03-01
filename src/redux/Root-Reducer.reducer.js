import {  combineReducers } from 'redux';
import CartReducer from "./cart/cart.reducer";
import CustomerReducer from "./customer/customer.reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persitsConfig={
    key:'root',
    storage,
    whitelist:['cart[items]'],
    
} 

const RootReducer = combineReducers({
    cart:CartReducer,
    customer:CustomerReducer,

});


export default persistReducer(persitsConfig, RootReducer);