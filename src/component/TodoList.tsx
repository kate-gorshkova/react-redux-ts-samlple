import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const TodoList: React.FC = () => {

    // Данные из состояния можно выцеплять с помощью хука useSelector
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)

    const {fetchTodos, setTodoPage} = useActions()

    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])


    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка: {error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id}. {todo.title}</div>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(p =>
                    <div
                        onClick={() => setTodoPage(p)}
                        style={{border: p === page ? '2px solid teal': '1px solid grey', padding: '10px', marginTop: '20px'}}
                        key={p}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList
