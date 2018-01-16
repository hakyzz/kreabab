import * as R from 'ramda'

export const getProductById = (state, id) => R.prop(id, state.products);

const KREABAB_PRODUCT_ID = 38;

export const getProducts = (state, ownProps) => {
  
  const activeCategoryId = getActiveCategoryId(ownProps);

  const applyCategory = item => R.equals(
    activeCategoryId,
    R.prop('categoryId', item)
  );

  return R.compose(
      R.when(R.always(activeCategoryId), R.filter(applyCategory)),
      R.map(id => getProductById(state, id))
  )(state.productsPage.ids).filter(product => product.id !== KREABAB_PRODUCT_ID)
};

export const getCustomProduct = (state) => {
  if (Object.keys(state.products).length === 0) {
    return {}
  }
  const customProductKey = Object.keys(state.products).find(key => state.products[key].id === KREABAB_PRODUCT_ID);
  return state.products[customProductKey];
};

export const getCategories = state => R.values(state.categories);

export const getActiveCategoryId = ownProps => R.path(['match', 'params', 'id'], ownProps);