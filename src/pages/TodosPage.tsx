import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const savedTodos = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ) as ITodo[]
    setTodos(savedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
    const shouldRemove = confirm('Are you sure you want to delete the todo')
    if (shouldRemove) {
      setTodos(todos.filter(todo => todo.id !== id))
    }
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
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  )
}

export default TodosPage
