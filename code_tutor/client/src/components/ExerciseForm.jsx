import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';

const ExerciseForm = props => {
  return (
    <div className='new-exercise-box'>
      <h4>Create New Exercise</h4>
      <Form
        className='exercise-form'
        id={props.id}
        onSubmit={props.handleExerciseSubmit}
      >
        <Form.Group controlId='formExercise'>
          <Row>
            <Col>
              <Form.Control
                type='text'
                name='title'
                placeholder='Title'
                value={props.lessonFormData.title}
                onChange={props.handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId='formExercise'>
          <Row>
            <Col>
              <Form.Control
                type='text'
                name='snippet'
                placeholder='Paste code snippet here...'
                value={props.lessonFormData.snippet}
                onChange={props.handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <input type='Submit' />
      </Form>
    </div>
  );
};

export default ExerciseForm;
