import * as R from 'ramda'

import products from './mockProducts'
import categories from './mockCategories'

export const fetchProducts = async () => {
  return new Promise(resolve => {
    resolve(products)
  })
};

export const fetchProductById = async (id) => {
  return new Promise((resolve, reject) => {
    const product = R.find(R.propEq('id', parseInt(id, 10)))(products);
    resolve(product)
  })
};

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
};