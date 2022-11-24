
import { GETALL_CATEGORY,CREATE_CATEGORY,DELETE_CATEGORY,SEARCH_CATEGORY,UPDATE_CATEGORY } from "../actions/categoryAction";

const initialState = {

products:[
    {
        id:1,
        name:'Noodles',
        img:'https://thumbs.dreamstime.com/b/noodle-bowl-dark-background-theme-food-photography-noodle-bowl-black-background-111843316.jpg',
        totalPrice:'50.000-80.000',
        icon:'restaurant-outline'

    },
    {
        id:2,
        name:'FastFoods',
        img:'https://i.pinimg.com/736x/ca/fb/15/cafb15772e44cd0b095ddfe38083132d.jpg',
        totalPrice:'50.000-200.000',
        icon:'pizza-outline'

    },
    {
        id:3,
        name:'Drinks',
        img:'https://previews.123rf.com/images/larryratt/larryratt1607/larryratt160700229/60230538-food-background-tea-and-coffee-theme-different-black-and-green-dry-tea-different-coffee-beans-cup-of.jpg',
        totalPrice:'50.000-200.000',
        icon:'cafe-outline'

    },
],
categories:[],
}

export const productReducer = (state=initialState, action) => {
    switch(action.type){
        case GETALL_CATEGORY:
            return {
                ...state,
                categories: [...action.payload]
            }
            case SEARCH_CATEGORY:
                return {
                    ...state,
                    categories: [...action.payload],
    
                };
            case CREATE_CATEGORY:
                    return {
                        ...state,
                        categories: [...state.categories, action.payload]
                    }
            case UPDATE_CATEGORY:
                    return {
                        ...state,
                        categories: state.categories.map((x) => {
                            if (x.docId === action.payload.docId) {
                                return {
                                    ...x,
                                    ...action.payload
                                }
                            } else {
                                return x
                            }
                        })
                    }
            case DELETE_CATEGORY:
                    return {
                        ...state,
                        categories: state.categories.filter(x => x.docId !== action.payload.docId),
                    }
        default:
            return{... state};
    }
}