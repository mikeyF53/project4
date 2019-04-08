import React from 'react';

const RegisterForm = props => {


  return (
    <div>
      <h3>Register Form</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name..'
          id='name'
          onChange={props.handleChange}
          value={props.formData.name}
        />
        <input
          type='text'
          name='email'
          placeholder='Email..'
          id='email'
          onChange={props.handleChange}
          value={props.formData.email}
        />
        <input
          type='text'
          name='password'
          placeholder='Password..'
          id='password'
          onChange={props.handleChange}
          value={props.formData.password}
        />
        <input type='submit' value='Submit'/>
      </form>
    </div>
  );
};

export default RegisterForm;