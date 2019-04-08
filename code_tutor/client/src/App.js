import React, { Component } from 'react';
import LessonPage from './components/LessonPage'
import RegisterForm from './components/RegisterForm'
import { showLessons } from './services/services'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lessons: [],
    }
  }
  async componentDidMount() {
    const lessons = await showLessons()
    this.setState({
      lessons
    })
  }
  render() {
    return (
      <div className='App'>
        <LessonPage lessons={this.state.lessons}/>
        <RegisterForm />
      </div>
    );
  }
}

export default App;
