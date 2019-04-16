import React from 'react';
import { Route, Link } from 'react-router-dom';
import ExerciseForm from './ExerciseForm';

const LessonDetail = props => {
  console.log(props.exercises);

  return (
    <div>
    
        <p>Lesson Details Page</p>

        <Link to={`/lessons/${props.match.params.id}/newexercise`}>
          <button onClick={() => {}}>Create an Exercise</button>
        </Link>
    
      {props.exercises &&
        props.exercises.map(exercise => (
          <div className='exercise-box' key={exercise.id}>
            <h3>{exercise.title}</h3>
            <input //make onclick to split snippet
              type='submit'
              value='Start exercise'
              onClick={() => {
                props.loadExercise(exercise);
              }}
            />

            <div>{exercise.snippet}</div>
            {/* Edit exercise */}
            <input
              type='submit'
              value='Edit Exercise'
              onClick={() => {
                props.setExerFormData(exercise);
              }}
            />
            {/* Delete exercise */}
            <input
              type='submit'
              value='Delete Exercise'
              onClick={e => {
                e.preventDefault();
                props.handleDeleteExer(exercise.lesson_id, exercise.id);
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default LessonDetail;
