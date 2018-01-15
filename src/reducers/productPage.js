import * as R from 'ramda'

import {
    FETCH_PRODUCT_BY_ID_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  id: null,
  options: {}
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return R.merge(state, {
        id: R.prop('id', payload),
        options: {
          bred: R.prop('bred', payload.options),
          sauce: R.prop('sauce', payload.options)
        }
      })
    default:
      return state
  }
}