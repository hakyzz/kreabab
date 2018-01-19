import {cartReducer, getInitialState} from './cart';

const actionAddToCart = {
    type: 'ADD_TO_CART',
    payload: {
        id: '1',
        name: 'Test',
        image: '',
        price: '',
        totalPrice: '',
        toppings: '',
        sauces: '',
        bread: ''
    }
}

const resultAddToCart = [{
    id: '1',
    name: 'Test',
    image: '',
    price: '',
    totalPrice: '',
    quantity: 1,
    toppings: '',
    sauces: '',
    bread: ''
}];
describe('reducers', () => {
    describe('cart', () => {
        it('should return the initial state', () => {
            expect(cartReducer([], {})).toEqual(getInitialState());
        });
        it('should handle ADD_TODO', () => {
            expect(
                JSON.stringify(cartReducer([], actionAddToCart))
            ).toEqual(
                JSON.stringify([
                    {
                        id: '1',
                        name: 'Test',
                        image: '',
                        price: '',
                        totalPrice: '',
                        quantity: 1,
                        toppings: '',
                        sauces: '',
                        bread: ''
                    }])
            )
        });
    });
});