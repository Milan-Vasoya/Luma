import {  combineReducers } from 'redux';
import CartReducer from "./cart/cart.reducer";
import CustomerReducer from "./customer/customer.reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import guestReducer from "./guest/guest.reducer";

const persitsConfig={
    key:'root',
    storage,
    whitelist:['guest'],
    
} 

const RootReducer = combineReducers({
    cart:CartReducer,
    customer:CustomerReducer,
    guest:guestReducer
});


export default persistReducer(persitsConfig, RootReducer);