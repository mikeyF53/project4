import React from 'react';

const LessonForm = props => {
  return (
    <div>
      <p>Create Lesson</p>
      <form onSubmit={props.handleLessonSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          id='title'
          onChange={props.handleChange}
          value={props.lessonFormData.title}
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          id='description'
          value={props.lessonFormData.description}
          onChange={props.handleChange}
        />
        <input onClick={props.handleSubmit} type='Submit' value='Submit Lesson' />
      </form>
    </div>
  );
};

export default LessonForm;
