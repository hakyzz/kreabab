import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import products from './products'
import productsPage from './productsPage'
import productPage from './productPage'
import categories from './categories'
import { cartReducer } from './cart'

export default combineReducers({
  routing: routerReducer,
  cartList: cartReducer,
  products,
  productsPage,
  productPage,
  categories
})