import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./Root-Reducer.reducer";

const MiddleWare =[logger]

export const store= createStore(RootReducer,applyMiddleware(...MiddleWare));