import React from 'react';
import { Route, Link } from 'react-router-dom';
import ExerciseForm from './ExerciseForm';


const LessonDetail = props => {
 console.log(props.match.params.id)
  return (
    <div>
      <p>Lesson Details Page</p>
      <input type='Submit' value='Add Exercise' />
      {props.exercises &&
        props.exercises.map(exercise => (
          <div key={exercise.id}>
            <h3>{exercise.title}</h3>
            <div>{exercise.snippet}</div>
          </div>
        ))}

      <ExerciseForm
      handleExerciseSubmit={props.handleExerciseSubmit}
        handleChange={props.handleChange}
        lessonFormData={props.lessonFormData}
        id={props.match.params.id}
      />
    </div>
  );
};

export default LessonDetail;
