const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

//create user/register
const createUser = async data => {
  const resp = await axios.post(`${BASE_URL}/users/`, { "user": data });
  return resp.data;
};

//login user
const loginUser = async data => {
  const resp = await axios.post(`${BASE_URL}/user_token/`, { "auth": data });
  return resp.data;
};

//show all lessons
const showLessons = async () => {
  const resp = await axios.get(`${BASE_URL}/lessons`);
  return resp.data;
};

//post lesson

//show exercises

//post exercise

export { createUser, loginUser, showLessons };
