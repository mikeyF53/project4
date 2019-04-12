import React from 'react';

import { Button, Row, Form, Col } from 'react-bootstrap';

const LoginForm = props => {
  return (
    <div className='login-box'>
      <h4>Login</h4>
      <Form onSubmit={props.handleLoginSubmit}>
        <Form.Group controlId='formEmail'>
          <Row>
            <Col>
              <Form.Control
                name='email'
                type='email'
                placeholder='Enter email'
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
                name='password'
                type='password'
                placeholder='Password..'
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

export default LoginForm;
