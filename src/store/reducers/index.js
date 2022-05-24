import {combineReducers} from 'redux'
import userReducers from './userReducers'

const reducers = combineReducers({
    user: userReducers
})

export default reducers