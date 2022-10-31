
import {CREATE_PRODUCT,UPDATE_PRODUCT,DELETE_PRODUCT} from "../actions/categoryAction";


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
currentProduct:{}
}

export const productReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_PRODUCT:
            let newP = {id: Number(action.payload.productId), name: action.payload.productName, logo: action.payload.productLogo, thumbnail: action.payload.productThumbnail}
            console.log(newP)

            return{
                ...state,
                products: [...state.products,newP],
                currentTag: newP
            }
        // case UPDATE_TAG:
        //     return{
        //         ...state,
        //         tags: state.tags.map((x) => {
        //             if (x.id === action.payload.tagId) {
        //                 return {...x,
        //                     name: action.payload.tagName,
        //                     price: action.payload.tagPrice,
        //                     image: action.payload.tagImage
        //                 }
        //             }
        //             return x;

        //         })
        //     }
        // case DELETE_TAG:  
        //     return{
        //         ...state,
        //         tags: state.tags.filter(x => x.id !== action.payload.tagId),
        //     }
        default:
            return{... state};
    }
}