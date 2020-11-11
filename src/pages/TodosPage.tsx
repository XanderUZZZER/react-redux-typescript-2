import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { ITodo } from '../types/interfaces'

declare var confirm: (question: string) => boolean

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    let savedTodos = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ) as ITodo[]
    if (savedTodos.length === 0) {
      savedTodos = [
        { title: 'title1', id: 1, completed: false },
        { title: 'title2', id: 2, completed: false },
        { title: 'title3', id: 3, completed: true },
      ]
    }

    console.log('useEffect 1 in parent, setting state from local storage')
    savedTodos.map(todo =>
      console.log(`id: ${todo.id}\t completed: ${todo.completed}`)
    )
    setTodos(savedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

    console.log(
      'useEffect 2 in parent, depends on todos, saving state to localstorage'
    )
    todos.map(todo =>
      console.log(`id: ${todo.id}\t completed: ${todo.completed}`)
    )

    return () => {
      console.log('clean up in parent useEffect2, state before cleaning')
      todos.map(todo =>
        console.log(`id: ${todo.id}\t completed: ${todo.completed}`)
      )
    }
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
    const shouldRemove = confirm('Are you sure you want to delete the todo')
    if (shouldRemove) {
      setTodos(todos.filter(todo => todo.id !== id))
    }
  }

  const toggleHandler = (id: number): void => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }

  const showCompleted = () => {
    console.log('competed')
    setTodos(prev => prev.filter(todo => todo.completed !== false))
  }

  const showAll = () => {
    console.log('competed')
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[])
  }

  console.log('TodosPage render')
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
      <button
        className='waves-effect waves-light btn'
        onClick={() => showCompleted()}
      >
        Show completed
      </button>
      <button
        className='waves-effect waves-light btn'
        onClick={() => showAll()}
      >
        Show all
      </button>
    </>
  )
}

export default TodosPage
