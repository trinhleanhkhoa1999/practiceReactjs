import axios from "axios";

const getListUsers = () => {
  return axios.get("https://reqres.in/api/users?page=1");
};
const postListUsers = (name, job) => {
  return axios.post("https://reqres.in/api/users", { name, job });
};
const putListUsers = (name, job) => {
  return axios.put("https://reqres.in/api/users/1", { name, job });
};
const deleteUsers = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};
export { getListUsers, postListUsers, putListUsers, deleteUsers };
