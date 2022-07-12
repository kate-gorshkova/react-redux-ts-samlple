import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../store/action-creators/user'

const UserList: React.FC = () => {

    // Данные из состояния можно выцеплять с помощью хука useSelector
    const {users, error, loading} = useTypedSelector(state => state.user)

    const {fetchUsers} = useActions()
    const dispatch = useDispatch()

    useEffect(() => {
        fetchUsers()
        // dispatch(fetchUsers())
    }, [])


    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка: {error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name }</div>
            )}
        </div>
    )
}

export default UserList
