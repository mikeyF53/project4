import React from 'react';
import { Route, Link } from 'react-router-dom';
import ExerciseForm from './ExerciseForm';

const LessonDetail = props => {
  
  return (
    <div>
      <p>Lesson Details Page</p>

      {props.exercises &&
        props.exercises.map(exercise => (
          <div key={exercise.id}>
            <h3>{exercise.title}</h3>
            <div>{exercise.snippet}</div>
          </div>
        ))}

      <Link to='/newexercise'>
        <button>Create an Exercise</button>
      </Link>
     
    </div>
  );
};

export default LessonDetail;
