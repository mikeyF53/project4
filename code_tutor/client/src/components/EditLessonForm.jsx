import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';


const EditLessonForm = props => {
  return (
    <div className='edit-lesson-box'>
      <h4>Edit Lesson</h4>
      <Form
        className='edit-lesson-form'
        onSubmit={props.handleEditLessonSubmit}
      >
        <Form.Group controlId='formEditLesson'>
          <Row>
            <Col>
              <Form.Control
                type='text'
                name='title'
                placeholder='Title'
                onChange={props.handleChange}
                value={props.lessonFormData.title}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId='formEditLesson'>
          <Row>
            <Col>
              <Form.Control
                type='text'
                name='description'
                placeholder='Description'
                id='description'
                value={props.lessonFormData.description}
                onChange={props.handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <input type='submit' value='Submit' />
      </Form>
    </div>
  );
};
export default EditLessonForm;
