import React from 'react';

const EditLessonForm = props => {
  return (
    <div>
      <form onSubmit={props.handleEditLessonSubmit}>
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
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};
export default EditLessonForm;
