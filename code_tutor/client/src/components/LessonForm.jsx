import React from 'react';

const LessonForm = props => {
  return (
    <div>
      <h4>Create Lesson</h4>
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
        <input type='Submit' value='Submit Lesson' />
      </form>
      {/* onClick={props.handleSubmit} */}
    </div>
  );
};

export default LessonForm;
