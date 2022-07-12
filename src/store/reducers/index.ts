import {combineReducers} from 'redux'
import { todoReduser } from './todoReducer'
import { userReduser } from './userReducer'

// Инициализация combineReducer, который будет объединять все redusers рпиложения
export const rootReducer = combineReducers({
    user: userReduser,
    todo: todoReduser,
})

export type RootState = ReturnType<typeof rootReducer>
