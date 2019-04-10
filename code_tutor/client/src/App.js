import React, { Component } from 'react';
import LessonPage from './components/LessonPage';
import LessonForm from './components/LessonForm';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import LessonDetail from './components/LessonDetail';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';

import {
  showLessons,
  createUser,
  createLesson,
  loginUser,
  getLessonExer
} from './services/services';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      lessons: [],
      exercises: [],
      currentUser: {},
      formData: {
        name: '',
        email: '',
        password: ''
      },
      lessonFormData: {
        title: '',
        description: '',
        user_id: ''
      },
      exerciseFormData: {
        title: '',
        snippet: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLessonSubmit = this.handleLessonSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.showLessonExer = this.showLessonExer.bind(this);
  }
  async componentDidMount() {
    const lessons = await showLessons();
    this.setState({
      lessons
    });
  }
  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
      lessonFormData: {
        ...prevState.lessonFormData,
        [name]: value
      }
    }));
  }
  async handleSubmit(e) {
    e.preventDefault();
    const newUser = await createUser(this.state.formData);
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      formData: {
        name: '',
        email: '',
        password: ''
      }
    }));
  }
  async handleLoginSubmit(e) {
    e.preventDefault();
    const loginData = await loginUser({
      email: this.state.formData.email,
      password: this.state.formData.password
    });
    console.log(loginData);
    const currentUser = decode(loginData.jwt);
    this.setState({
      currentUser
    });
    console.log(this.state.currentUser);

    localStorage.setItem('jwt', loginData.jwt);
    this.setState({
      formData: {
        email: '',
        password: ''
      },
      currentUser: '',
      isLoggedIn: true
    });
  }
  

  async handleLessonSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.lessonFormData.title,
      description: this.state.lessonFormData.description,
      id: this.state.currentUser.id
    };
    const newLesson = await createLesson(data);
    console.log(data);
    this.setState(prevState => ({
      lessons: [...prevState.lessons, newLesson]
    }));

    this.setState({
      lessonFormData: {
        title: '',
        description: ''
      }
    });
  }
  async showLessonExer(id) {
    const exercises = await getLessonExer(id);
    this.setState({
      exercises
    });
    this.props.history.push(`/lesson/details`);
  }

  render() {
    return (
      <div className='App'>
        <Link to='/'>Lessons Page</Link>
        <Link to='/register'>Sign up</Link>
        <Link to='/login'>Login</Link>
        <Route
          exact
          path='/'
          render={props => (
            <LessonPage
              lessons={this.state.lessons}
              showLessonExer={this.showLessonExer}
            />
          )}
        />
        <Route
          exact
          path='/register'
          render={props => (
            <RegisterForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              formData={this.state.formData}
            />
          )}
        />
        <Route
          exact
          path='/login'
          render={props => (
            <LoginForm
              handleLoginSubmit={this.handleLoginSubmit}
              handleChange={this.handleChange}
              formData={this.state.formData}
            />
          )}
        />
        <Link to='/createlesson'>Create a Lesson</Link>
        <Route
          exact
          path='/createlesson'
          render={props => (
            <LessonForm
              handleLessonSubmit={this.handleLessonSubmit}
              handleChange={this.handleChange}
              lessonFormData={this.state.lessonFormData}
            />
          )}
        />
        <Route
          exact
          path='/lesson/details'
          render={props => (
            <LessonDetail {...props} exercises={this.state.exercises} />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
