import React from '../../node_modules/react';
import { Button, Row, Form, Col } from '../../node_modules/react-bootstrap';

const LessonForm = props => {
  return (
    <div className='new-lesson-box'>
      <h4>Create Lesson</h4>
      <Form className='lesson-form' onSubmit={props.handleLessonSubmit}>
        <Form.Group controlId='formLesson'>
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
        <Form.Group controlId='formDescription'>
          <Row>
            <Col>
              <Form.Control
                type='text'
                name='description'
                placeholder='Description'
                value={props.lessonFormData.description}
                onChange={props.handleChange}
              />
            </Col>
          </Row>
        </Form.Group>

        <Button type='Submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default LessonForm;
