import { takeLatest,put,all ,call } from 'redux-saga/effects';
import customerActionType from "./customer.type";
import Cookies from 'js-cookie' ;
import { setCustomerToken,clearCustomerToken} from "./customer.action";
import { clearCartItems } from "../cart/cart.action";
import CookieName from "../../components/Cookies/Cookies.name";

export function* customerTokenSettter({token:custToken}){
    
    //console.log('[customerSaga]',custToken)
    yield Cookies.set(CookieName.customer_Token,custToken,{ expires: 3 })
     yield put(setCustomerToken(custToken))
}

export  function* onSignInStart(){
   yield takeLatest(customerActionType.SIGN_IN_START,customerTokenSettter)
}


export function* customerTokenCleared(){
    yield Cookies.remove(CookieName.customer_Token)
    yield put(clearCustomerToken())
    yield put(clearCartItems())
}

export function* onSignOutStart(){
    yield takeLatest(customerActionType.SIGN_OUT_START,customerTokenCleared)
}

export default function* CustomerSaga(){
yield all([call(onSignInStart),call(onSignOutStart)])
}