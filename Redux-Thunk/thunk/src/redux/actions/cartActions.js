// import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, PLACE_ORDER } from "../constants";

// export const addToCart = product => ({ type: ADD_TO_CART, payload: product });
// export const removeFromCart = id => ({ type: REMOVE_FROM_CART, payload: { id } });
// export const updateQuantity = (id, quantity) => ({ type: UPDATE_QUANTITY, payload: { id, quantity } });
// export const placeOrder = () => ({ type: PLACE_ORDER });
//import cartActions from "../redux/actions/cartActions";

export const removeFromCart = (id) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: id,
    };
  };
  
  export const updateQuantity = (id, quantity) => {
    return {
      type: "UPDATE_QUANTITY",
      payload: { id, quantity },
    };
  };
  

