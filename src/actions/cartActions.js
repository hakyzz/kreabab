import { ADD_TO_CART } from '../actiontypes/ActionTypes';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}