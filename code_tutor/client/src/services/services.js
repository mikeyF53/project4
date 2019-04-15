const axios = require('axios');

// const BASE_URL = 'https://stark-harbor-15567.herokuapp.com/';
const BASE_URL = 'http://localhost:3000';

//create user/register
const createUser = async data => {
  const resp = await axios.post(`${BASE_URL}/users/`, { user: data });
  return resp.data;
};

//login user
const loginUser = async loginData => {
  const resp = await axios.post(`${BASE_URL}/user_token/`, { auth: loginData });
  return resp.data;
};

//show all lessons
const showLessons = async () => {
  const resp = await axios.get(`${BASE_URL}/lessons`);
  return resp.data;
};

//Create a lesson
const createLesson = async data => {
  const resp = await axios.post(
    `${BASE_URL}/users/${data.user_id}/lessons`,
    data
  );
  console.log(data);
  return resp.data;
};

//Update/Edit Lesson
const updateLesson = async (data, user_id) => {
  const { lesson_id } = data;
  const resp = await axios.put(
    `${BASE_URL}/users/${user_id}/lessons/${lesson_id}`,
    data
  );
  return resp.data;
};

//delete lesson
const deleteLesson = async (user_id, lesson_id) => {
  const resp = await axios.delete(
    `${BASE_URL}/users/${user_id}/lessons/${lesson_id}`
  );
  return resp.data;
};

//show all exercises for lesson
const getLessonExer = async id => {
  const resp = await axios.get(`${BASE_URL}/lessons/${id}/exercises`);
  return resp.data;
};

//post exercise
const createExercise = async data => {
  const resp = await axios.post(
    `${BASE_URL}/lessons/${data.lesson_id}/exercises`,
    data
  );
  return resp.data;
};
//edit/update exercise
const updateExercise = async data => {
  const resp = await axios.put(
    `${BASE_URL}/lessons/${data.lesson_id}/exercises/${data.exercise_id}`,
    data
  );
  return resp.data;
};

//delete exercise
const deleteExercise = async (lesson_id, exercise_id) => {
  const resp = await axios.delete(
    `${BASE_URL}/lessons/${lesson_id}/exercises/${exercise_id}`
  );
  return resp.data;
};
export {
  updateLesson,
  createExercise,
  getLessonExer,
  createUser,
  loginUser,
  showLessons,
  createLesson,
  deleteLesson,
  deleteExercise,
  updateExercise
};
