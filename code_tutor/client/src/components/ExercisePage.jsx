import React from 'react';

const ExercisePage = props => {
  const checkKey = props.wrongKey === false && props.exerciseText;

  return (
    <div className='exercise-container'>
      <div className='exercise-page-boxes'>
        <div 
        className='snippet-box'>{props.exerciseFormData}</div>
        <textarea
          className='typing-box'
          value={checkKey.join('')}
          onChange={props.handleExerTextChange}
        />
      </div>
      <input
        onClick={() => {
          props.finishExercise();
        }}
        type='button'
        value='Complete'
      />
    </div>
  );
};

export default ExercisePage;
