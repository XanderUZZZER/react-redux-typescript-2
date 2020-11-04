import React, { useState } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && title !== '') {
      props.onAdd(title)
      setTitle('')
    }
  }

  return (
    <div className='input-field mt2'>
      <input
        onChange={changeHandler}
        value={title}
        type='text'
        id='title'
        placeholder='Enter Todo title'
        onKeyPress={keyPressHandler}
      />
      <label htmlFor='title' className='active'>
        Enter Todo title
      </label>
    </div>
  )
}

export default TodoForm
