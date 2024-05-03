import { combineReducers } from "redux";
import userAuth from "./userAuth";
import products from "./products";

const rootReducer = combineReducers({
  userAuth: userAuth,
  products: products,
});

export default rootReducer;
