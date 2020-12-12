import React from 'react'
import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import infoReducer from './reducers/infoReducer'


const reducers = combineReducers({info: infoReducer})

export const store = createStore(reducers, applyMiddleware(thunk))