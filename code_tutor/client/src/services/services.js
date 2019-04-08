const axios = require('axios');
const BASE_URL = 'http://localhost:3000';


//create user
const createUser = async(data) => {
  const resp = await axios.post(`${BASE_URL}/users`, data)
  return resp.data
}



//show exercises

//post exercise

//show lessons

//post lesson



export { createUser }