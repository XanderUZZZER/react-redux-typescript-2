import React, { useEffect } from 'react'
import { ITodo } from '../interfaces'

interface TodoListProps {
  todos: ITodo[]
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  useEffect(() => {
    console.log('Effect in list, state received through props')
    console.log(todos)

    return () => {
      console.log('clean out in list, state before cleaning')
      console.log(todos)
    }
  }, [todos])

  if (todos.length === 0) {
    return <p className='center'>There is no todos, add some</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

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
