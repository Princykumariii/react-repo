// import axios from "axios"
// export const FETCH_TODOS_LOADING = "FETCH_TODOS_LOADING";
//  export const  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
//  export const  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
//  const addTodo =()=>({
//     type:"ADD_TODO",
//     payload :"buy cloths",
//  })
//   export const fetchTodos =() =>async(dispatch) =>{
//     dispatch ({type:FETCH_TODOS_LOADING});
//     try{
//         const response =await axios.get("https://jsonplaceholder.typicode.com/users");
//         dispatch({type:FETCH_TODOS_SUCCESS,payload:response.data})
//      } catch(err){
//         dispatch({type:FETCH_TODOS_ERROR,payload:err.message})
//      }
    
   
//  }

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { productReducer } from "./reducers/productReducer";
// import { cartReducer } from "./reducers/cartReducer";

// const rootReducer = combineReducers({
//   products: productReducer,
//   cart: cartReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;

// // src/redux/reducers/productReducer.js
// import {
//   FETCH_PRODUCTS_REQUEST,
//   FETCH_PRODUCTS_SUCCESS,
//   FETCH_PRODUCTS_FAILURE,
// } from "../constants";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
