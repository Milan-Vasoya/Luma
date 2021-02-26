const INITIAL_STATE={
    token:""
}

const CustomerReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_CUSTOMER_TOKEN":
            return{
                ...state,
                token:action.token
            }
        
        default :
        return state
    }
}

export default CustomerReducer;