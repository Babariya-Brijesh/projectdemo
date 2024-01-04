import {ADD_CART, CLEAR_CART} from '../action/types';
const initialState = {
  cartArray: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      state.cartArray = [...state.cartArray, action.payload];
      return state;
    case CLEAR_CART:
      state.cartArray = [];
      return state;
    default:
      return state;
  }
};
export default cartReducer;
