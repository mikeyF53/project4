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
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                <button
                  onClick={() => {
                    this.props.showLessonExer(lesson.id);
                  }}
                >
                  Lesson Details
                </button>
                
                <input
                  type='submit'
                  value='Edit'
                  onClick={() => {
                    this.props.setLessonFormData(lesson);
                  }}
                />
              </div>
            ))}
        </article>
      </div>
    );
  }
}
export default LessonPage;
