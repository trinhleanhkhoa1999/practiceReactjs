import axios from "axios";

const getListUsers = () => {
  return axios.get("https://reqres.in/api/users?page=1");
};
const postListUsers = (name, job) => {
  return axios.post("https://reqres.in/api/users", { name, job });
};
export { getListUsers, postListUsers };
