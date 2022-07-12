export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string,
}

export enum UsersActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
    type: UsersActionType.FETCH_USERS,
}

interface FetchUsersSuccessAction {
    type: UsersActionType.FETCH_USERS_SUCCESS,
    payload: any[],
}

interface FetchUsersErrorAction {
    type: UsersActionType.FETCH_USERS_ERROR,
    payload: string,
}

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
