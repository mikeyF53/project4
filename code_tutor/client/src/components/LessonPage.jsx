import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

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
        <Link to='/createlesson'><button>Create a Lesson</button></Link>
        <article>
          {this.props.lessons &&
            this.props.lessons.map(lesson => (
              <div key={lesson.id}>
                <h3>Lesson: {lesson.title}</h3>

                {/* Edit Lesson Button */}
                <input
                  type='submit'
                  value='Edit Lesson'
                  onClick={() => {
                    this.props.setLessonFormData(lesson);
                  }}
                />
                {/* Delete Lesson Button*/}
                <input 
                type='submit' 
                value='Delete Lesson'
                onClick={e => {
                  e.preventDefault();
                  this.props.handleDeleteLesson(lesson.user_id, lesson.id,)
                }} />

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
