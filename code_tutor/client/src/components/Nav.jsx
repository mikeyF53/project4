import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Nav = props => {
  console.log(props.pathname);

  return (
    <div className='nav-bar'>
      <nav>
        {props.pathname === '/lessons' ? <img src='' alt='logo'/> : (
          <a
            href='#'
            onClick={() => {
              props.history.goBack();
            }}
          >
            Back
          </a>
        )}
        {props.isLoggedIn ? (
          <div className='nav-links'>
          <Link to='/' onClick={props.handleLogout}>
            Logout
          </Link>
          </div>
        ) : (
          <div className='nav-links'>
            <Link to='/'>Login</Link> / <Link to='/register'>Register</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default withRouter(Nav);
