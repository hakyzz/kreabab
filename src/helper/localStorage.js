import { CART_ITEMS_STORAGE_ID } from '../constants'

/**
 * Save cart state to local storage
 * @param cartState
 */
export const saveCartItems = (cartState) => {
    try {
        const serializedState = JSON.stringify(cartState);
        localStorage.setItem(CART_ITEMS_STORAGE_ID, serializedState);
    } catch (e) {
        return e
    }
};

/**
 * get cart items from local storage
 * @returns {object | undefined}
 */
export const getCartItems = () => {
    try {
        return JSON.parse(localStorage.getItem(CART_ITEMS_STORAGE_ID));
    } catch(err) {
        return undefined;
    }
};

/**
 *  clears local storage
 */
export const clearLocalStorage = () => {
    localStorage.removeItem(CART_ITEMS_STORAGE_ID);
};