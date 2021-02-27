import customerActionType from "./customer.type";

const INITIAL_STATE={
    token:""
}

const CustomerReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case customerActionType.SET_CUSTOMER_TOKEN:
            return{
                ...state,
                token:action.token
            }
            case customerActionType.CLEAR_CUSTOMER_TOKEN:
                return{
                    ...state,
                    token:""
                }
        default :
        return state
    }
}

export default CustomerReducer;