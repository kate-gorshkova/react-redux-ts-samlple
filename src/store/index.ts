import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

// Функция createStore принимает в себя 2 параметра. Первый параметр: reducer. Второй параметр: middleware
export const store = createStore(rootReducer, applyMiddleware(thunk))
