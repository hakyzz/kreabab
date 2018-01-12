import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//IMPORT REDUCERS
import products from './products'
import productsPage from './productsPage'
import productPage from './productPage'
import categories from './categories'
import { cartReducer } from './cart'

//HERE COMBINE THE REDUCERS
export default combineReducers({
  routing: routerReducer,
  cartList: cartReducer,
  products,
  productsPage,
  productPage,
  categories
})