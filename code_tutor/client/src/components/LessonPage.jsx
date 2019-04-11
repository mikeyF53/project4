import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class LessonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Lessons Page</h2>
        <article>
          {this.props.lessons &&
            this.props.lessons.map(lesson => (
              <div key={lesson.id}>
                <h3>Lesson: {lesson.title}</h3>
              <input
                  type='submit'
                  value='Edit Lesson'
                  onClick={() => {
                    this.props.setLessonFormData(lesson);
                  }}
                />
                <p>Description: {lesson.description}</p>
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
