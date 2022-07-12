import { UserState, UsersAction, UsersActionType } from "../../types/user"

// Инициализация дефолтного состояния, которое передается в reducer
const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

// Reducer принимает 2 состояния: state и action
export const userReduser = (state = initialState, action: UsersAction): UserState => {
    switch (action.type) {
        case UsersActionType.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UsersActionType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UsersActionType.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}
