import { createStore, applyMiddleware } from 'redux'
import reducers from './../reducers/index'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

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
console.log(store.getState());
export default store