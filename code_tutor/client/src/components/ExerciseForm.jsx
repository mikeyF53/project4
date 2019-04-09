import React from 'react'

const ExerciseForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <input 
      type='text'
      name='title'
      value={}
      onChange={props.handleChange}
      />

      <input 
      type='text'
      name='snippet'
      value={}
      onChange={props.handleChange}
      />
      <input type='Submit'/>
      


      </form>
    </div>
  )
}

export default ExerciseForm
