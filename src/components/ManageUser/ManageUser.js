import TableListUser from "./TableListUser";
import { getListUsers } from "../../services/apiService";
import { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
const ManageUser = () => {
  const [listUsers, setlistUsers] = useState({});
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getListUsers();
    console.log(res);
    if (res && res.status === 200) {
      setlistUsers(res.data.data);
    }
  };
  return (
    <div className="user-container">
      <div className="title">Quan ly Users</div>
      <div>
        <CreateUser />
      </div>
      <div>
        <TableListUser listUsers={listUsers} />
      </div>
    </div>
  );
};
export default ManageUser;
