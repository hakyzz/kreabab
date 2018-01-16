import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import './index.css'

import App from './components/App/App'

import storeInstance from './helper/storeInstance'

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);