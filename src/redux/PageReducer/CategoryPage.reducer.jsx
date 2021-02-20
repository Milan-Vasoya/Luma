import rootCategories from "../../attributes/rootCategories/RootCategories.atttributes";

const INITIAL_STATE={
    cat_id: '21'
}

const CategoryPageReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'CHANGE_ID':
           return {
        ...state,
        cat_id:rootCategories[action.cat_id]
            }
        default:
            return state;
        }
}


export default CategoryPageReducer;