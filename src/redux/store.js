import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./Root-Reducer.reducer";
 import createSagaMiddleware from 'redux-saga';
// import CustomerSaga from "./customer/customer.saga";
import rootSaga from "./root.saga";
import { persistStore } from "redux-persist";

 const sagaMiddleware= createSagaMiddleware();
const MiddleWare = [logger, sagaMiddleware];

export const store = createStore(RootReducer, applyMiddleware(...MiddleWare));


sagaMiddleware.run(rootSaga);

export const persistore = persistStore(store);