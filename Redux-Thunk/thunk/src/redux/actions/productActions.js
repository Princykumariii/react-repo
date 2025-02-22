import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../constants";

export const fetchProducts = () => async dispatch => {
  try {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  // try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};