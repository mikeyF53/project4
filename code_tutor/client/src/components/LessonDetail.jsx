import React from 'react';
import { Route, Link } from 'react-router-dom';
import ExerciseForm from './ExerciseForm';

const LessonDetail = props => {
  console.log(props.exercises);
  
  return (
    <div>
      <p>Lesson Details Page</p>

      {props.exercises &&
        props.exercises.map(exercise => (
          <div key={exercise.id}>
            <h3>{exercise.title}</h3>
            <input //make onclick to split snippet
              type='submit'
              value='Start exercise'
              onClick={() => {
                props.loadExercise(exercise)
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
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDeleteExer(exercise.lesson_id, exercise.id);
                  }}
                />
          </div>
          
        ))}

      <Link to={`/lessons/${props.match.params.id}/newexercise`}>
        <button onClick={()=>{
          console.log(props.match.params.id);
          
        }}>Create an Exercise</button>
      </Link>
     
    </div>
  );
};

export default LessonDetail;
