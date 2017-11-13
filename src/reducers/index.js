import { combineReducers } from 'redux';

//IMPORT REDUCERS
import { productsReducer } from './products';
import { cartReducer } from './cart';

//HERE COMBINE THE REDUCERS
export default combineReducers({
  productList: productsReducer,
  cartList: cartReducer,
})