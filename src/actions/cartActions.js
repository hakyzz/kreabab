import { 
  ADD_TO_CART, 
  CHANGE_QUANTITY_CART, 
  DELETE_FROM_CART 
} from '../actiontypes/ActionTypes';


export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const changeQuantityCart = (id, quantity) => {
  return {
    type: CHANGE_QUANTITY_CART,
    id,
    quantity
  }
}

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    id
  }
}

