import React, { useEffect } from 'react'
import { ITodo } from '../types/interfaces'

interface TodoListProps {
  todos: ITodo[]
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoList: React.FC = () => {
  return <ul></ul>
}

export default TodoList
