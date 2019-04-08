import React from 'react';

const LessonPage = props => {

  return (
    <div>
      <h2>Lesson Page</h2>
      <article>
        {props.lessons &&
          props.lessons.map(lesson => (
            <div key={lesson.id}>
              <p>{lesson.title}</p>
              <p>{lesson.description}</p>
            </div>
          ))}
      </article>
    </div>
  );
};

export default LessonPage;
