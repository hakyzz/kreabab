import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from '../constants/ActionTypes';

import {
    fetchProducts as fetchProductsApi,
    fetchCategories as fetchCategoriesApi
} from '../api'

export const fetchProducts = () => async dispatch => {
    dispatch({type: FETCH_PRODUCTS_START});

    try {
        const products = await fetchProductsApi();
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
};

export const fetchCategories = () => async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START});

    try {
        const categories = await fetchCategoriesApi();
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
};