import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer'

const state = combineReducers({authReducer})

export default createStore(state, applyMiddleware(promiseMiddleware))