import React from '../../node_modules/react';
import { Row, Form, Col } from '../../node_modules/react-bootstrap';


const EditExerciseForm = props => {
  return (
    <div className='edit-exercise-box'>
      <h4>Edit Exercise</h4>
      <Form
        className='edit-exercise-form'
        id={props.id}
        onSubmit={props.handleEditExerciseSubmit}
      >
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type='text'
                name='title'
                placeholder='Title'
                value={props.exerciseFormData.title}
                onChange={props.handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                as='textarea'
                rows='5'
                name='snippet'
                placeholder='Code Snippet'
                value={props.exerciseFormData.snippet}
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

export default EditExerciseForm;
