import CategoryPageReducer from "./PageReducer/CategoryPage.reducer";
import {  combineReducers } from 'redux';

const RootReducer = combineReducers({
    page:CategoryPageReducer
});
export default RootReducer;