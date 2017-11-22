import { ADD_TO_CART, DELETE_FROM_CART } from '../actiontypes/ActionTypes'

export function cartReducer(state = {
    cartTotal: '',
    cart: []
  }, action) {
  // console.log('cartReducer = ', action);
  switch (action.type) {
    case ADD_TO_CART:
      const elem = state.cart.find( element => element.id === action.payload.id );
      
      if ( elem ) {
        console.log('product bereits im warenkorb');
        let newState = { ...state };
        newState.cart = state.cart.map( element => {
          if (element.id === action.payload.id) {
            element.quantity++;
            element.totalPrice = Number(element.price) * element.quantity;
          }
          return element;
        })
        newState = updateTotal(newState);
        return newState;
      
      } else {
        console.log('product noch nicht im warenkorb');
        let newState = { ...state };
        const newItem = {
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          totalPrice: action.payload.price,
          quantity: 1
        }
        newState.cart.push(newItem)
        newState = updateTotal(newState);
        return newState;
      }

    case DELETE_FROM_CART:
      let newState4 = { ...state };
      newState4.cart = state.cart.filter( element => element.id !== action.payload.id )
      newState4 = updateTotal(newState4);
      return newState4;

    default:
      return state
  }
}


function updateTotal(newState) {
  var total = 0;
  newState.cart.map( elem  => {'total = ', total = Number(total) + elem.quantity * elem.price } );
  newState.cartTotal = total;
  console.log(newState.cartTotal);
  return newState;
}