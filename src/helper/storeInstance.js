import { createStore, applyMiddleware } from 'redux'
import reducers from './../reducers/index'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { saveCartItems } from "../helper/localStorage";
import throttle from 'lodash/throttle';

// Add logger as middleware
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

// Create store instance
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);

// Persist cart state to local storage
store.subscribe(throttle(() => {
    const state = store.getState();
    saveCartItems(state.cartList)
}, 1000));

export default store