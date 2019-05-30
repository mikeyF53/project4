import React from '../../node_modules/react';
import { Route, Link } from '../../node_modules/react-router-dom';
import { Button } from '../../node_modules/react-bootstrap';

const LessonPage = props => {
return (
      <div className='lesson-page'>
        {/*Lessons title with plus sign */}
        <div className='lesson-page-header'>
          <h2>Lessons</h2>
          <Link className='create-button' to='/createlesson'>
            <i className="fas fa-plus"></i>
          </Link>
        </div>
          {/* Each lesson group */}
        <div className='lesson-container'>
          {props.lessons &&
            props.lessons.map(lesson => (
              <div className='lesson-box' key={lesson.id}>
                <div className='title-buttons'>
                  <h3>Lesson: {lesson.title}</h3>
                  {/* Edit Lesson Button */}
                  <div className='edit-delete'>
                    <i className="fas fa-edit"
                      onClick={() => {
                        props.setLessonFormData(lesson);
                      }}>
                    </i>

                    {/* Delete Lesson Button*/}
                    <i className="fas fa-trash"
                      onClick={e => {
                        e.preventDefault();
                        props.handleDeleteLesson(
                          lesson.user_id,
                          lesson.id
                        );
                      }}>
                    </i>
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
        </div>
      </div>
    );
  }

export default LessonPage;
