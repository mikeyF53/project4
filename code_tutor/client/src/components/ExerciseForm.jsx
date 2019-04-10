import React from 'react'

const ExerciseForm = (props) => {
  return (
    <div>
      <h4>Create New Exercise</h4>
      <form id={props.id} onSubmit={props.handleExerciseSubmit}>
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
