import * as R from 'ramda'

import products from './mockProducts'
import categories from './mockCategories'

export const fetchProducts = async () => {
  return new Promise(resolve => {
    resolve(products)
  })
}
/* 
Check Error handling
export const fetchProducts = async () => {
    return new Promise((resolve, reject) => {
        reject('some error)
    })
}
*/

export const fetchProductById = async (id) => {
  // console.log('from api', id);
  return new Promise((resolve, reject) => {
    // console.log('products', products);
    // console.log('product id', id);
    const product = R.find(R.propEq('id', parseInt(id, 10)))(products)
    // console.log('product', product);
    resolve(product)
  })
}

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}