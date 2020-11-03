import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { ITodo } from './interfaces'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const removeHandler = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleHandler = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        console.log(todo)

        return todo
      })
    )
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onRemove={removeHandler}
          onToggle={toggleHandler}
        />
      </div>
    </>
  )
}

export default App
