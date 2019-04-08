import React, { Component } from 'react';
import LessonPage from './components/LessonPage';
import RegisterForm from './components/RegisterForm';
import { showLessons, createUser } from './services/services';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lessons: [],
      users: [],
      formData: {
        name: '',
        email: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  render() {
    return (
      <div className='App'>
        <LessonPage lessons={this.state.lessons} />
        <RegisterForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          formData={this.state.formData}
        />
      </div>
    );
  }
}

export default App;
