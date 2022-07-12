import { Dispatch } from "redux"
import { UsersAction, UsersActionType } from "../../types/user"
import axios from 'axios'

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionType.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UsersActionType.FETCH_USERS_SUCCESS, payload: response.data})
            }, 1500)
        } catch (e) {
            dispatch({
                type: UsersActionType.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
