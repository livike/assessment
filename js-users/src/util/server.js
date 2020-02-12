import axios from "axios";

const BASE_URL = "http://js-assessment-backend.herokuapp.com/";

export const fetchUsers = () => axios.get(BASE_URL + "users.json");

export const updateStatus = (userId, status) => {
  // console.log(userId, status);
  return axios.put(`${BASE_URL}users/${userId}.json`, { status });
};
