import React from 'react'
import TodoList from './component/TodoList'
import UserList from './component/UserList'

const App = () => {
  return (
    <div>
        <UserList />
        <hr />
        <TodoList />
    </div>
  )
}

export default App
