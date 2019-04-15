import React, { Component } from 'react';

const ExercisePage = props => {
  const checkKey = props.wrongKey === false && props.exerciseText;
  
  return (
    <div className='exercise-container'>
      <div>
        <div className='snippet-txt'>{props.exerciseFormData}</div>
      </div>

      <div>
        <textarea
          value={checkKey.join('')}
          onChange={props.handleExerTextChange}
          // rows='8'
          // cols='50'
          id='text-box'
          className='typing-box'
        />
        <br />
        <input
          onClick={() => {
            this.props.finishExercise();
          }}
          type='button'
          value='Complete'
        />
      </div>
    </div>
  );
};

export default ExercisePage;
