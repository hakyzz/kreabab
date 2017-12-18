export const getCartTotalNoOfItems = (state) => {
    return state.cartList.reduce((acc, cartItem) => {
        return parseInt(acc, 10) + parseInt(cartItem.quantity, 10);
    }, 0)
};

export const getCart = (state) => {
    return state.cartList
};

export const getCartTotal = (state) => {
    return state.cartList.reduce((acc, cartItem) => {
        return parseInt(acc, 10) + parseInt(cartItem.quantity, 10) * cartItem.price
    }, 0)
};