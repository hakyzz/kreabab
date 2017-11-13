import { ADD_TO_CART } from '../actiontypes/ActionTypes'

export function cartReducer(state = {
    cart: []
  }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.payload]
      }
    default:
      return state
  }
}