import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class LessonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.lessons);

    return (
      <div>
        <div className='lesson-page-header'>
          <h2>Lessons Page</h2>
          <Link className='create-button' to='/createlesson'>
            <button>Create a Lesson</button>
          </Link>
        </div>

        <article className='lesson-container'>
          {this.props.lessons &&
            this.props.lessons.map(lesson => (
              <div className='lesson-box' key={lesson.id}>
                <div className='title-buttons'>
                  <h3>Lesson: {lesson.title}</h3>
                  {/* Edit Lesson Button */}
                  <div className='edit-delete'>
                    <img
                    className='edit-button'
                      src='https://img.icons8.com/material-sharp/25/000000/edit.png'
                      onClick={() => {
                        this.props.setLessonFormData(lesson);
                      }}
                    />

                    {/* Delete Lesson Button*/}
                    <img className='delete-button'
                      src='https://img.icons8.com/color/25/000000/cancel.png'
                      onClick={e => {
                        e.preventDefault();
                        this.props.handleDeleteLesson(
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
                    this.props.showLessonExer(lesson);
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
}
export default LessonPage;
