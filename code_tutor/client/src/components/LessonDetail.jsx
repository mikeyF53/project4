import React from 'react';

const LessonDetail = props => {
  return (
    <div>
      <p>Lesson Details Page</p>
      {props.exercises &&
        props.exercises.map(exercise => (
          <div>
            <h3>{exercise.title}</h3>
            <div>{exercise.snippet}</div>
          </div>
        ))}
    </div>
  );
};

export default LessonDetail;
