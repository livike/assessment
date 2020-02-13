import axios from "axios";

const BASE_URL = "http://js-assessment-backend.herokuapp.com/";

export const fetchUsers = () => axios.get(BASE_URL + "users.json");

export const updateStatus = (userId, status) => {
  // console.log(userId, status);
  return axios.put(`${BASE_URL}users/${userId}.json`, { status });
};

export const addUser = user => axios.post(`${BASE_URL}users.json`, user);

export const fetchUser = userId => axios.get(`${BASE_URL}users/${userId}.json`);

export const updateUser = user => {
  const { id, ...other } = user;
  return axios.put(`${BASE_URL}users/${id}.json`, { ...other });
};
