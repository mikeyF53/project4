import React from 'react';
import { Route, Link } from 'react-router-dom';
import ExerciseForm from './ExerciseForm';

const LessonDetail = props => {
  console.log(props.exercises);

  return (
    <div>
      <div className='exercise-page-header'>
        <h2>Exercises</h2>
        <Link to={`/lessons/${props.match.params.id}/newexercise`}>
        <i className="fas fa-plus"></i>
        </Link>
      </div>
      <article className='exercise-container'>
        {props.exercises &&
          props.exercises.map(exercise => (
            <div className='exercise-box' key={exercise.id}>
              <div className='title-buttons'>
                <h3>{exercise.title}</h3>
                {/* Edit exercise */}
                <div className='edit-delete'>
                <img
                    className='edit-button'
                      src='https://img.icons8.com/material-sharp/25/000000/edit.png'
                    onClick={() => {
                      props.setExerFormData(exercise);
                    }}
                  />
                  {/* Delete exercise */}
                  <img className='delete-button'
                      src='https://img.icons8.com/color/25/000000/cancel.png'
                    onClick={e => {
                      e.preventDefault();
                      props.handleDeleteExer(exercise.lesson_id, exercise.id);
                    }}
                  />
                </div>
              </div>
              <div>{exercise.snippet}</div>
              <input //make onclick to split snippet
                type='submit'
                value='Start exercise'
                onClick={() => {
                  props.loadExercise(exercise);
                }}
              />
            </div>
          ))}
      </article>
    </div>
  );
};

export default LessonDetail;
