import React from 'react';
import { Button, Row, Form, Col } from 'react-bootstrap';

const RegisterForm = props => {
  return (
    <div className='register-box'>
      <h4>Register Form</h4>
      <Form className='register-form' onSubmit={props.handleRegisterSubmit}>
        <Form.Group controlId='formName'>
          <Row>
            <Col>
              <Form.Control
                type='text'
                name='name'
                placeholder='Name..'
                onChange={props.handleChange}
                value={props.formData.name}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Row>
            <Col>
              <Form.Control
                type='email'
                name='email'
                placeholder='Email..'
                onChange={props.handleChange}
                value={props.formData.email}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId='formPw'>
          <Row>
            <Col>
              <Form.Control
                type='password'
                name='password'
                placeholder='Password..'
                id='password'
                onChange={props.handleChange}
                value={props.formData.password}
              />
            </Col>
          </Row>
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
