// Demo REST API via https://www.mocky.io/
// http://www.mocky.io/v2/5a4a8aeb310000a909cd9af6

import * as R from 'ramda'
import request from 'superagent'

import products from './mockProducts'

export const fetchProducts = async () => {
  const {body} = await request.get('http://www.mocky.io/v2/5a4a8aeb310000a909cd9af6');
  return body.products
};

export const fetchProductById = async (id) => {
  return new Promise((resolve, reject) => {
    const product = R.find(R.propEq('id', parseInt(id, 10)))(products);
    resolve(product)
  })
};