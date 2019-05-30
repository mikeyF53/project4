import React, { Component } from '../node_modules/react';
import LessonPage from './components/LessonPage';
import LessonForm from './components/LessonForm';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import LessonDetail from './components/LessonDetail';
import ExerciseForm from './components/ExerciseForm';
import EditLessonForm from './components/EditLessonForm';
import EditExerciseForm from './components/EditExerciseForm';
import ExercisePage from './components/ExercisePage';
import Nav from './components/Nav';
import Footer from './components/Footer';

import { withRouter } from '../node_modules/react-router';
import decode from '../node_modules/jwt-decode/lib';
import { Route, Link } from '../node_modules/react-router-dom';
import './App.css';
import {
  updateExercise,
  deleteLesson,
  updateLesson,
  createExercise,
  deleteExercise,
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
      wrongKey: false,
      users: [],
      lessons: [],
      exercises: [],
      exerciseText: [],
      currentUser: {},
      formData: {
        name: '',
        email: '1234@gmail.com',
        password: '1234'
      },
      lessonFormData: {
        title: '',
        description: '',
        user_id: '',
        exercise_id: ''
      },
      exerciseFormData: {
        title: '',
        snippet: '',
        lesson_id: ''
      }
    };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showLessonExer = this.showLessonExer.bind(this);
    this.setLessonFormData = this.setLessonFormData.bind(this);
    this.setExerFormData = this.setExerFormData.bind(this);
    this.handleLessonSubmit = this.handleLessonSubmit.bind(this);
    this.handleEditLessonSubmit = this.handleEditLessonSubmit.bind(this);
    this.handleDeleteLesson = this.handleDeleteLesson.bind(this);
    this.handleExerciseSubmit = this.handleExerciseSubmit.bind(this);
    this.handleEditExerciseSubmit = this.handleEditExerciseSubmit.bind(this);
    this.handleDeleteExer = this.handleDeleteExer.bind(this);
    this.loadExercise = this.loadExercise.bind(this);
    this.finishExercise = this.finishExercise.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleExerTextChange = this.handleExerTextChange.bind(this);
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
      },
      exerciseFormData: {
        ...prevState.exerciseFormData,
        [name]: value
      }
    }));
  }
  // typing box for exercise
  handleExerTextChange(e) {
    const { value } = e.target;
    const { exerciseText, exerciseFormData } = this.state;

    const snippet = exerciseFormData.snippet;
    // check if value.slice(-1) is equal to snippet[exerciseText.length]
    if (snippet[exerciseText.length] === value.slice(-1)) {
      this.setState(prevState => ({
        exerciseText: [...prevState.exerciseText, value.slice(-1)],
        wrongKey: false
      }));
    } 
    if (exerciseText.length + 1 === snippet.length) {
      console.log('Exercise Complete');
    }
  }
  async handleRegisterSubmit(e) {
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
    this.props.history.push('/');
  }
  async handleLoginSubmit(e) {
    e.preventDefault();
    const loginData = await loginUser({
      email: this.state.formData.email,
      password: this.state.formData.password
    });
    localStorage.setItem('jwt', loginData.jwt);
    this.setState({
      formData: {
        email: '',
        password: ''
      }
      // isLoggedIn: true
    });
    const currentUser = decode(loginData.jwt);
    localStorage.setItem('user_id', currentUser.id);
    this.setState({
      currentUser,
      isLoggedIn: true
    });
    this.props.history.push('/lessons');
  }
  handleLogout(e) {
    e.preventDefault();
    console.log('User has been logged out');
    localStorage.removeItem('jwt');
    this.setState({
      isLoggedIn: false
    });
    this.props.history.push('/');
  }

  async handleEditLessonSubmit(e) {
    e.preventDefault();
    const { lessonFormData } = this.state;

    const editLesson = await updateLesson(
      lessonFormData,
      this.state.currentUser.id
    );
    this.setState(prevState => ({
      lessons: [
        ...prevState.lessons.filter(
          lesson => lesson.id !== prevState.lessonFormData.lesson_id
        ),
        editLesson
      ]
    }));

    this.props.history.push(`/lessons`);
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
    this.props.history.push(`/lessons`);
    console.log(this.state.lessons);
  }
  async handleExerciseSubmit(e) {
    e.preventDefault();
    const exerciseData = {
      title: this.state.lessonFormData.title,
      snippet: this.state.lessonFormData.snippet,
      lesson_id: this.state.lessonFormData.lesson_id
    };

    const newExercise = await createExercise(exerciseData);
    this.setState(prevState => ({
      exercises: [...prevState.exercises, newExercise]
    }));
    this.setState({
      lessonFormData: {
        title: '',
        snippet: '',
        lesson_id: this.state.lessonFormData.lesson_id
      }
    });
    this.props.history.push(`/lessons/${exerciseData.lesson_id}/details`);
  }
  async showLessonExer(lesson) {
    const exercises = await getLessonExer(lesson.id);
    this.setState({
      exercises,
      lessonFormData: {
        lesson_id: lesson.id
      }
    });

    this.props.history.push(`/lessons/${lesson.id}/details`);
  }
  setLessonFormData(data) {
    this.setState({
      lessonFormData: {
        title: data.title,
        description: data.description,
        snippet: data.snippet,
        lesson_id: data.id
      }
    });
    this.props.history.push(`/lessons/${data.id}/edit`);
  }

  setExerFormData(data) {
    this.setState({
      exerciseFormData: {
        title: data.title,
        snippet: data.snippet,
        lesson_id: data.lesson_id,
        exercise_id: data.id
      }
    });
    console.log(data.lesson_id);
    this.props.history.push(
      `/lessons/${data.lesson_id}/exercises/${data.id}/edit`
    );
  }
  async handleDeleteLesson(user_id, id) {
    await deleteLesson(user_id, id);
    this.setState(prevState => ({
      lessons: prevState.lessons.filter(lesson => lesson.id !== id)
    }));
  }

  async handleEditExerciseSubmit(e) {
    e.preventDefault();
    const { exerciseFormData } = this.state;
    const editExercise = await updateExercise(exerciseFormData);

    this.setState(prevState => ({
      exercises: [
        ...prevState.exercises.filter(
          exercise => exercise.id !== prevState.exerciseFormData.exercise_id
        ),
        editExercise
      ]
    }));
    this.props.history.push(`/lessons/${exerciseFormData.lesson_id}/details`);
  }
  async handleDeleteExer(lesson_id, exercise_id) {
    await deleteExercise(lesson_id, exercise_id);
    this.setState(prevState => ({
      exercises: prevState.exercises.filter(
        exercise => exercise.id !== exercise_id
      )
    }));
  }
  //splits snippet to an array on exercise load
  loadExercise(exercise) {
    const exerciseArray = exercise.snippet.split('');
    this.setState({
      exerciseFormData: {
        snippet: exerciseArray
      }
    });
    this.props.history.push(`/exercise/${exercise.id}`);
  }

  finishExercise() {
    this.setState({
      exerciseFormData: {
        snippet: ''
      },
      exerciseText: []
    });
  }

  render() {
    return (
      <div className='App'>
        <Nav
          lessons={this.state.lessons}
          handleLogout={this.handleLogout}
          isLoggedIn={this.state.isLoggedIn}
          pathname={this.props.location.pathname}
        />

        <Route
          exact
          path='/lessons'
          render={props => (
            <LessonPage
              lessons={this.state.lessons}
              handleDeleteLesson={this.handleDeleteLesson}
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
              handleRegisterSubmit={this.handleRegisterSubmit}
              handleChange={this.handleChange}
              formData={this.state.formData}
            />
          )}
        />
        <Route
          exact
          path='/'
          render={props => (
            <LoginForm
              handleLoginSubmit={this.handleLoginSubmit}
              handleChange={this.handleChange}
              formData={this.state.formData}
            />
          )}
        />

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
              handleDeleteExer={this.handleDeleteExer}
              lessonFormData={this.state.lessonFormData}
              handleExerciseSubmit={this.handleExerciseSubmit}
              setExerFormData={this.setExerFormData}
              loadExercise={this.loadExercise}
              id={this.props.match.params.id}
            />
          )}
        />
        <Route
          exact
          path='/lessons/:id/edit'
          render={props => (
            <EditLessonForm
              title={this.state.lessonFormData.title}
              description={this.state.lessonFormData.description}
              exercises={this.state.exercises}
              handleChange={this.handleChange}
              handleEditLessonSubmit={this.handleEditLessonSubmit}
              lessonFormData={this.state.lessonFormData}
            />
          )}
        />

        <Route
          exact
          path='/lessons/:id/newexercise'
          render={props => (
            <ExerciseForm
              {...props}
              handleExerciseSubmit={this.handleExerciseSubmit}
              lessonFormData={this.state.lessonFormData}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          exact
          path='/lessons/:id/exercises/:id/edit'
          render={props => (
            <EditExerciseForm
              {...props}
              handleEditExerciseSubmit={this.handleEditExerciseSubmit}
              exerciseFormData={this.state.exerciseFormData}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          exact
          path='/exercise/:id'
          render={props => (
            <ExercisePage
              {...props}
              wrongKey={this.state.wrongKey}
              finishExercise={this.finishExercise}
              exerciseFormData={this.state.exerciseFormData.snippet}
              exerciseText={this.state.exerciseText}
              handleExerTextChange={this.handleExerTextChange}
            />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
