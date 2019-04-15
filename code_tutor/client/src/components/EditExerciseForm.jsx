import React from 'react';

const EditExerciseForm = props => {
  return (
    <div>
      <h4>Edit Exercise</h4>
      <form id={props.id} onSubmit={props.handleEditExerciseSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={props.exerciseFormData.title}
          onChange={props.handleChange}
        />

        <input
          type='text'
          name='snippet'
          placeholder='Code Snippet'
          value={props.exerciseFormData.snippet}
          onChange={props.handleChange}
        />

        <input type='Submit' />
      </form>
    </div>
  );
};

export default EditExerciseForm;
