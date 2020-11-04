import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cumque
        dolores ipsum tempora ullam labore est sequi, corporis impedit cum vero
        delectus minima eius eveniet praesentium nemo facere fugit quaerat.
      </p>
      <button className='btn' onClick={() => history.push('/')}>
        Back home
      </button>
    </>
  )
}
