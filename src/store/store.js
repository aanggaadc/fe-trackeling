import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"

const composeEnchancers = composeWithDevTools({})


export const store = createStore(
    reducers,
    {},
    composeEnchancers(applyMiddleware(thunk),)    
)