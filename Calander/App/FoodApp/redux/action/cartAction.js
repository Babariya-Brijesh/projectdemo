import {ADD_CART, CLEAR_CART} from './types';
export const addCart = cartDetails => {
  return {
    type: ADD_CART,
    payload: cartDetails,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
