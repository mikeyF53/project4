import React, { Component } from 'react';

const ExercisePage = props => {
  return (
    <div>
      <div>
        <div className='snippet-txt'>{props.exerciseFormData}</div>
      </div>

      <div>
        <textarea
          onChange={props.handleExerTextChange}
          rows='8'
          cols='50'
          id='text-box'
          className='hidden'
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
