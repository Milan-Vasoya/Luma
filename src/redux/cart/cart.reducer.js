const INITIAL_STATE={
    hidden:true
}

const CartReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "TOGGLE_HIDDEN":
            return{
                ...state,
                hidden:!state.hidden
            }
        
        default :
        return state
    }
}

export default CartReducer;