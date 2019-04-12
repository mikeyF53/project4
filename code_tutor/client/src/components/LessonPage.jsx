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
        <h2>Lessons Page</h2>
        <Link to='/createlesson'>
          <button>Create a Lesson</button>
        </Link>
        <article>
          {this.props.lessons &&
            this.props.lessons.map(lesson => (
              <div key={lesson.id}>
                <h3>Lesson: {lesson.title}</h3>
                {/* Edit Lesson Button */}
                <Button
                  size='sm'
                  onClick={() => {
                    this.props.setLessonFormData(lesson);
                  }}
                >
                  Edit Lesson
                </Button>
                {/* Delete Lesson Button*/}
                <Button
                  size='sm'
                  variant='danger'
                  onClick={e => {
                    e.preventDefault();
                    this.props.handleDeleteLesson(lesson.user_id, lesson.id);
                  }}
                >
                  Delete Lesson
                </Button>

                <p>Description: {lesson.description}</p>
                {/* Show Exercises */}
                <button
                  onClick={() => {
                    this.props.showLessonExer(lesson);
                  }}
                >
                  Exercises
                </button>
              </div>
            ))}
        </article>
      </div>
    );
  }
}
export default LessonPage;
