import * as R from 'ramda'

export const getProductById = (state, id) => R.prop(id, state.products)

export const getProducts = (state, ownProps) => {
  
  const activeCategoryId = getActiveCategoryId(ownProps)

  // console.log('from getProducts', activeCategoryId);

  const applyCategory = item => R.equals(
    activeCategoryId,
    R.prop('categoryId', item)
  )

  const products = R.compose(
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getProductById(state, id))
  )(state.productsPage.ids)

  return products
}

export const getCategories = state => R.values(state.categories)

export const getActiveCategoryId = ownProps => R.path(['match', 'params', 'id'], ownProps)