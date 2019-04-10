import React, { Component } from 'react';
import LessonPage from './components/LessonPage';
import LessonForm from './components/LessonForm';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import LessonDetail from './components/LessonDetail';
import ExerciseForm from './components/ExerciseForm';
import EditLessonForm from './components/EditLessonForm';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import { Route, Link } from 'react-router-dom';
import './App.css';
import {
  createExercise,
  showLessons,
  createUser,
  createLesson,
  loginUser,
  getLessonExer
} from './services/services';

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
        snippet: '',
        lesson_id: '',
        user_id: ''
      },
      exerciseFormData: {
        title: '',
        snippet: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExerciseSubmit = this.handleExerciseSubmit.bind(this);
    this.handleLessonSubmit = this.handleLessonSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.showLessonExer = this.showLessonExer.bind(this);
    this.setLessonFormData = this.setLessonFormData.bind(this);
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

    localStorage.setItem('jwt', loginData.jwt);
    this.setState({
      formData: {
        email: '',
        password: ''
      },
      isLoggedIn: true
    });
    const currentUser = decode(loginData.jwt);
    // localStorage.setItem('jwt', currentUser.id);
    this.setState({
      currentUser
    });
  }

  async handleLessonSubmit(e) {
    e.preventDefault();
    const lessonData = {
      title: this.state.lessonFormData.title,
      description: this.state.lessonFormData.description,
      user_id: this.state.currentUser.id
    };
    const newLesson = await createLesson(lessonData);
    this.setState(prevState => ({
      lessons: [...prevState.lessons, newLesson]
    }));

    this.setState({
      lessonFormData: {
        title: '',
        description: ''
      }
    });
    console.log(this.state.lessons);
  }
  async handleExerciseSubmit(e) {
    e.preventDefault();
    const exerciseData = {
      title: this.state.lessonFormData.title,
      snippet: this.state.lessonFormData.snippet,
      lesson_id: e.target.id
    };
    const newExercise = await createExercise(exerciseData);
    this.setState(prevState => ({
      exercises: [...prevState.exercises, newExercise]
    }));
    this.setState({
      lessonFormData: {
        title: '',
        snippet: ''
      }
    });
  }
  async showLessonExer(id) {
    const exercises = await getLessonExer(id);
    this.setState({
      exercises
    });
    // console.log(this.state.lessons.id);

    this.props.history.push(`/lessons/${id}/details`);
  }
  setLessonFormData(data) {
    this.setState({
      title: data.title,
      description: data.description,
      snippet: data.snippet
    });
    this.props.history.push(`/lessons/${data.id}/edit`);
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
              setLessonFormData={this.setLessonFormData}
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
          path='/lessons/:id/details'
          render={props => (
            <LessonDetail
            {...props}
              exercises={this.state.exercises}
              handleChange={this.handleChange}
              lessonFormData={this.state.lessonFormData}
              handleExerciseSubmit={this.handleExerciseSubmit}
            />
          )}
        />
        <Route
          exact
          path='/lessons/:id/edit'
          render={props => (
            <EditLessonForm
              exercises={this.state.exercises}
              handleChange={this.handleChange}
              handleEditLessonSubmit={this.handleEditLessonSubmit}
              lessonFormData={this.state.lessonFormData}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
