import * as R from 'ramda'

import { 
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_BY_ID_SUCCESS
} from '../constants/ActionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues);
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);
    default:
      return state
  }
}