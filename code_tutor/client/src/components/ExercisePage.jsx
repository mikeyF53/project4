import React, { Component } from 'react';

const ExercisePage = props => {
  return (
    <div>
      <div>
        <div>{props.exerciseFormData}</div>
      </div>

      <div id='game'>
        <textarea
          onChange={props.onKeyPress}
          rows='8'
          cols='50'
          id='game-text'
          class='hidden'
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
