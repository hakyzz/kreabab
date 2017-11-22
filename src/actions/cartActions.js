import { ADD_TO_CART, DELETE_FROM_CART } from '../actiontypes/ActionTypes';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export function deleteFromCart(itemId) {
  return {
    type: DELETE_FROM_CART,
    itemId
  }
}

