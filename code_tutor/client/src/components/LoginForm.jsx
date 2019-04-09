import React from 'react'

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleLoginSubmit}>
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
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default LoginForm