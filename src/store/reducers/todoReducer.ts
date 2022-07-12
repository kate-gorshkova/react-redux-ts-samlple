import { TodoState, TodoAction, TodoActionTypes } from "../../types/todo"

// Инициализация дефолтного состояния, которое передается в reducer
const initialState: TodoState = {
    todos: [],
    error: null,
    page: 1,
    limit: 10,
    loading: false,
}

// Reducer принимает 2 состояния: state и action
export const todoReduser = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}
