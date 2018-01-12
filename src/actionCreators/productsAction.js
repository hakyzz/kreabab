import { 
  // GET_PRODUCTS,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_BY_ID_START,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from '../constants/ActionTypes';

import { 
  fetchProducts as fetchProductsApi,
  fetchProductById as fetchProductByIdApi,
  fetchCategories as fetchCategoriesApi
} from '../api'

/*
export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: ''
  }
}
*/

export const fetchProducts = () => async dispatch => {
  dispatch({type: FETCH_PRODUCTS_START})

  try {
    const products = await fetchProductsApi()
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products
    })
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: err,
      error: true
    })
  }
}


export const fetchProductById = (id) => async dispatch => {
  dispatch({type: FETCH_PRODUCT_BY_ID_START})

  try {
    const product = await fetchProductByIdApi(id)
    // console.log('fetchProductByIdApi', id)
    // console.log('fetchProductByIdApi product', product)
    dispatch({
      type: FETCH_PRODUCT_BY_ID_SUCCESS,
      payload: product
    })
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
}



export const fetchCategories = () => async dispatch => {
  dispatch({type: FETCH_CATEGORIES_START})

  try {
    const categories = await fetchCategoriesApi()
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    })
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    })
  }
}