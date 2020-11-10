import React, { useEffect } from 'react'
import { ITodo } from '../types/interfaces'

interface TodoListProps {
  todos: ITodo[]
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  useEffect(() => {
    console.log(
      'useEffect in child, depends on todos, state received through props'
    )
    todos.map(todo =>
      console.log(`id: ${todo.id}\t completed: ${todo.completed}`)
    )

    return () => {
      console.log('clean up in child, state before cleaning')
      todos.map(todo =>
        console.log(`id: ${todo.id}\t completed: ${todo.completed}`)
      )
    }
  }, [todos])

  if (todos.length === 0) {
    return <p className='center'>There is no todos, add some</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }
  console.log('TodosList render')
  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className='material-icons red-text'
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
