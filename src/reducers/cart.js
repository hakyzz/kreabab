import {ADD_TO_CART, CHANGE_QUANTITY_CART, DELETE_FROM_CART} from '../actiontypes/ActionTypes'

export function cartReducer(state = {
    cartTotal: '',
    cartTotalNumberOfProducts: 0,
    cart: []
}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const elem = state.cart.find(element => element.id === action.payload.id);
            if (elem) {
                let newState = {...state};
                newState.cart = state.cart.map(element => {
                    if (element.id === action.payload.id) {
                        element.quantity++;
                        element.totalPrice = Number(element.price) * element.quantity;
                    }
                    element.totalPrice = Math.round(element.totalPrice * 100) / 100;
                    return element;
                });
                let newState1 = updateTotal(newState);
                return updateTotalNumberOfProducts(newState1);

            } else {
                let newState = {...state};
                const newItem = {
                    id: action.payload.id,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price,
                    totalPrice: action.payload.price,
                    quantity: 1
                };
                newState.cart.push(newItem);
                let newState1 = updateTotal(newState);
                return updateTotalNumberOfProducts(newState1);
            }

        case CHANGE_QUANTITY_CART:
            let newState3 = {...state};
            newState3.cart = state.cart.map( element => {
                // eslint-disable-next-line
                if (element.id === parseInt(action.id)) {
                    element.quantity = action.quantity;
                    element.totalPrice = Math.round((Number(element.price) * element.quantity) * 100) / 100;
                }
                return element;
            });
            newState3 = updateTotal(newState3);
            return newState3;

            
        case DELETE_FROM_CART:
            let newState4 = {...state};
            // eslint-disable-next-line
            newState4.cart = state.cart.filter( element => element.id !== parseInt(action.id));
            
            newState4 = updateTotal(newState4);
            newState4 = updateTotalNumberOfProducts(newState4);
            return newState4;

        default:
            return state
    }
}


function updateTotalNumberOfProducts(newState) {
  let quantity = 0;
  newState.cart.map(elem => {
    return quantity = Number(quantity) + elem.quantity
  });
  // console.log(quantity);
  newState.cartTotalNumberOfProducts = quantity;
  return newState;
}


function updateTotal(newState) {
  let total = 0;
  newState.cart.map(elem => {
      return total = Number(total) + elem.quantity * elem.price
  });
  newState.cartTotal = Math.round(total * 100) / 100;
  return newState;
}