import React, { Component } from 'react';

class ExercisePage extends Component {
  constructor() {
    super();
    
    const button = document.querySelector('button');
    const gameText = document.querySelector('#game-text');
    let lessonArray = [];
    let counter = 0;
  }
  render() {
    return (
      <div>
        <div>
          <div>{this.props.exerciseFormData}</div>
        </div>

        <div id='game'>
          <textarea rows='8' cols='50' id='game-text' class='hidden' />
          <br/>
          <input onClick={() => {
            this.props.finishExercise();
          }} type='button' value='Complete'/>

        </div>
      </div>
    );
  }
}

export default ExercisePage;
