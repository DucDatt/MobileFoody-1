
import {createStore, combineReducers} from "redux";
import { productReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
    products: productReducer
});
