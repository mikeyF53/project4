import React from 'react'

const ExerciseForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleExerciseSubmit}>
      <input 
      type='text'
      name='title'
      placeholder='Title'
      value={props.lessonFormData.title}
      onChange={props.handleChange}
      />

      <input
      type='text'
      name='snippet'
      placeholder='Code Snippet'
      value={props.lessonFormData.snippet}
      onChange={props.handleChange}
      />
      <input type='Submit'/>
      


      </form>
    </div>
  )
}

export default ExerciseForm
