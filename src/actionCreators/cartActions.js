import {
    ADD_TO_CART,
    CHANGE_QUANTITY_CART,
    DELETE_FROM_CART,
    COMPLETE_ORDER
} from '../constants/ActionTypes';

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function changeQuantityCart(id, quantity) {
    return {
        type: CHANGE_QUANTITY_CART,
        id,
        quantity
    }
};

export function deleteFromCart(id) {
    return {
        type: DELETE_FROM_CART,
        id
    }
};

export function completeOrder() {
    return {
        type: COMPLETE_ORDER
    }
};

