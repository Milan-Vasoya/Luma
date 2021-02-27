import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./Root-Reducer.reducer";
 import createSagaMiddleware from 'redux-saga';
import CustomerSaga from "./customer/customer.saga";


 const sagaMiddleware= createSagaMiddleware();
const MiddleWare = [logger, sagaMiddleware];

export const store = createStore(RootReducer, applyMiddleware(...MiddleWare));


sagaMiddleware.run(CustomerSaga);