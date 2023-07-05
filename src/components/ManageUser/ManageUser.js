import TableListUser from "./TableListUser";
import { getListUsers } from "../../services/apiService";
import { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
const ManageUser = () => {
  const [listUsers, setlistUsers] = useState({});

  const [isShowHideModalEdit, setIsShowHideModalEdit] = useState(false);
  const [dataEditUser, setDataEditUser] = useState({});

  const [isShowHideModalDelete, setIsShowHideModalDelete] = useState(false);
  const [dataDeleteUser, setDataDeleteUser] = useState({});
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getListUsers();
    if (res && res.status === 200) {
      setlistUsers(res.data.data);
    }
  };
  const addNewUser = (user) => {
    setlistUsers([...listUsers, user]);
  };
  const handleEditUser = (editUser) => {
    setIsShowHideModalEdit(true);
    setDataEditUser(editUser);
    let cloneListUsers = [...listUsers];
    let index = listUsers.findIndex((item) => item.id === editUser.id);
    cloneListUsers[index].first_name = editUser.first_name;
    setlistUsers(cloneListUsers);
  };
  const handleBtnDeleteUser = (deleteUser) => {
    setIsShowHideModalDelete(true);
    setDataDeleteUser(deleteUser);
  };
  const handleDeleteUser = (user) => {
    let cloneListUsers = listUsers.filter((item) => item.id !== user.id);
    setlistUsers(cloneListUsers);
  };

  return (
    <div className="user-container">
      <div className="title">Quan ly Users</div>
      <div>
        <CreateUser addNewUser={addNewUser} />
      </div>
      <div>
        <TableListUser
          listUsers={listUsers}
          handleEditUser={handleEditUser}
          handleBtnDeleteUser={handleBtnDeleteUser}
        />
      </div>
      <ModalEdit
        show={isShowHideModalEdit}
        setShow={setIsShowHideModalEdit}
        dataEditUser={dataEditUser}
        handleEditUser={handleEditUser}
      />
      <ModalDelete
        show={isShowHideModalDelete}
        setShow={setIsShowHideModalDelete}
        dataDeleteUser={dataDeleteUser}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};
export default ManageUser;
