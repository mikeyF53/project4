import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LessonPage = props => {
return (
      <div>
        <div className='lesson-page-header'>
          <h2>Lessons</h2>
          <Link className='create-button' to='/createlesson'>
            <button>Create a Lesson</button>
          </Link>
        </div>

        <article className='lesson-container'>
          {props.lessons &&
            props.lessons.map(lesson => (
              <div className='lesson-box' key={lesson.id}>
                <div className='title-buttons'>
                  <h3>Lesson: {lesson.title}</h3>
                  {/* Edit Lesson Button */}
                  <div className='edit-delete'>
                    <img
                    className='edit-button'
                      src='https://img.icons8.com/material-sharp/25/000000/edit.png'
                      onClick={() => {
                        props.setLessonFormData(lesson);
                      }}
                    />

                    {/* Delete Lesson Button*/}
                    <img className='delete-button'
                      src='https://img.icons8.com/color/25/000000/cancel.png'
                      onClick={e => {
                        e.preventDefault();
                        props.handleDeleteLesson(
                          lesson.user_id,
                          lesson.id
                        );
                      }}
                    />
                  </div>
                </div>
                <p>Description: {lesson.description}</p>
                {/* Show Exercises */}
                <Button
                  size='sm'
                  onClick={() => {
                    props.showLessonExer(lesson);
                  }}
                >
                  Exercises
                </Button>
              </div>
            ))}
        </article>
      </div>
    );
  }

export default LessonPage;
