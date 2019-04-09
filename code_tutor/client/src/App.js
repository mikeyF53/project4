import React, { Component } from 'react';
import LessonPage from './components/LessonPage';
import LessonForm from './components/LessonForm';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { showLessons, createUser, createLesson, loginUser } from './services/services';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      lessons: [],
      users: [],
      formData: {
        name: '',
        email: '',
        password: ''
      },
      lessonFormData: {
        title: '',
        description: ''
      },
      exerciseFormData: {
        title: '',
        snippet: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLessonSubmit = this.handleLessonSubmit.bind(this);
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
    const loggedUser = await loginUser({
      email: this.state.formData.email,
      password: this.state.formData.password
    });
    this.setState(prevState => ({
      loggedIn: [...prevState.loggedIn, loggedUser],
      formData: {
        name: '',
        email: '',
        password: ''
      },
      isLoggedIn: true
    }));
  }

  async handleLessonSubmit(e) {
    e.preventDefault();
    const newLesson = await createLesson(this.state.lessonFormData);
    this.setState(prevState => ({
      lessons: [...prevState.lessons, newLesson],
      lessonFormData: {
        title: '',
        description: ''
      }
    }));
  }
  render() {
    return (
      <div className='App'>
        <LessonPage lessons={this.state.lessons} />

        <RegisterForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          formData={this.state.formData}
        />
        <LessonForm
          handleChange={this.handleChange}
          lessonFormData={this.state.lessonFormData}
        />
        <LoginForm
          handleChange={this.handleChange}
          formData={this.state.formData}
        />
      </div>
    );
  }
}

export default App;
