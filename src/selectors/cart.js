export const getCartTotalNoOfItems = (state) => {
    return state.cartList.reduce((acc, cartItem) => {
        return acc + cartItem.quantity
    }, 0)
};

export const getCart = (state) => {
    return state.cartList
};

export const getCartTotal = (state) => {
    return state.cartList.reduce((acc, cartItem) => {
        return acc + cartItem.quantity * cartItem.price
    }, 0)
};