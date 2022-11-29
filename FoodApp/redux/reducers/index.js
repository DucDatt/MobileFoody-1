
import {createStore, combineReducers} from "redux";
import { productReducer } from "./categoryReducer";
import { foodReducer } from "./foodReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    foods:foodReducer
});
