import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { ITodo } from './interfaces'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      completed: false,
      id: 1,
      title: 'title1',
    },
    {
      completed: true,
      id: 2,
      title: 'title 2',
    },
    {
      completed: false,
      id: 3,
      title: 'title 3',
    },
  ])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const removeHandler = (id: number): void => {
    // setTodos(prev => [...prev.filter(todo => todo.id !== id)])
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleHandler = (id: number): void => {
    // setTodos(prev => {
    //   return prev.map(todo => {
    //     if (todo.id === id) {
    //       console.log(todo.id)

    //       return { ...todo, completed: !todo.completed }
    //       //todo.completed = !todo.completed
    //       console.log(todo.completed)
    //     }
    //     return todo
    //   })
    // })
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
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
