const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

//create user/register
const createUser = async data => {
  const resp = await axios.post(`${BASE_URL}/users/`, { "user": data });
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
const getLessonExer = async (id) => {
  const resp = await axios.get(`${BASE_URL}/lessons/${id}/exercises`)
  return resp.data;
}

//post lesson
const createLesson = async (data) => {
  const resp = await axios.post(`${BASE_URL}/users/${data.id}/lessons`, data)
  console.log(data);
  
  return resp.data;
}
//show exercises

//post exercise

export { getLessonExer, createUser, loginUser, showLessons, createLesson };
