 import { legacy_createStore as createStore } from "redux";
import  todoReducer  from "./reducers/todoReducers";

export const store = createStore(todoReducer);

import {  applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import  productReducer  from "./reducers/productReducer";
import  cartReducer  from "./reducers/cartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

