import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className='nav-bar'>
      <nav>
        {/* <Link to='/'>Lessons Page</Link> */}
       
        {
          props.isLoggedIn
            ?
            <Link to='/login' onClick={props.handleLogout}>Logout</Link>
            :
            <span>
              <Link to='/login'>Login</Link> / <Link to='/register'>Register</Link>
            </span>
        }
      </nav>
    </div>
  );
};

export default Nav;
