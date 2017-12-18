import {
    ADD_TO_CART,
    CHANGE_QUANTITY_CART,
    DELETE_FROM_CART,
    COMPLETE_ORDER
} from '../constants/ActionTypes';
import { saveCartItems } from "../helper/localStorage";

function persistCartState(state) {
    saveCartItems(state.cartList)
}

export function addToCart(product) {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_TO_CART,
            payload: product
        });
        persistCartState(getState());
    }
}

export const changeQuantityCart = (id, quantity) => {
    return (dispatch, getState) => {
        dispatch({
            type: CHANGE_QUANTITY_CART,
            id,
            quantity
        });
        persistCartState(getState());
    }
};

export const deleteFromCart = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_FROM_CART,
            id
        });
        persistCartState(getState());
    }
};

export const completeOrder = () => {
    return (dispatch, getState) => {
        dispatch({
            type: COMPLETE_ORDER
        });
        persistCartState(getState());
    }
};

