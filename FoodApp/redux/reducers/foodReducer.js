import { GETALL_FOOD, SEARCH_FOOD } from "../actions/foodAction";


const initialState = {

    
        
    foods: [],
}
export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALL_FOOD:
            return {
                ...state,
                foods: [...action.payload]
            }
        case SEARCH_FOOD:
            return {
                ...state,
                foods: [...action.payload],

            };
            default:
                return { ...state };
    }
}