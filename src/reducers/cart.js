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
                let newState2 = updateTotalNumberOfProducts(newState1);
                return newState2;

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
                let newState2 = updateTotalNumberOfProducts(newState1);
                return newState2;
            }

        case CHANGE_QUANTITY_CART:
            let newState3 = {...state};
            newState3.cart = state.cart.map( element => {
                if (element.id === action.id) {
                    element.quantity = action.quantity;
                    element.totalPrice = Number(element.price) * element.quantity;
                }
                return element;
            })
            newState3 = updateTotal(newState3);
            return newState3; // TODO: Funktioniert ebenfalls noch nicht

            
        case DELETE_FROM_CART:
            let newState4 = {...state};
            newState4.cart = state.cart.filter( element => element.id !== action.id ) // TODO: Zu löschendes Element scheint nicht gefiltert zu werden.
            
            console.log(newState4.cart); // TODO: Neuer State beinhaltet immer noch alle Elemente.
            
            newState4 = updateTotal(newState4);
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