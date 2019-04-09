import React from 'react'

const LessonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <input 
      type='text'
      name='title'
      value={props.LessonForm.title}
      onChange={props.handleChange}
      />
      <input 
      type='text'
      name='description'
      value={props.LessonForm.description}
      onChange={props.handleChange}
      />
      <input type='Submit'value='Submit Lesson'/>
      </form>
    </div>
  )
}

export default LessonForm
