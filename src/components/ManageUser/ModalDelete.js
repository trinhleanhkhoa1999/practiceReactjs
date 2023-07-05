import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUsers } from "../../services/apiService";
import { toast } from "react-toastify";

const ModalDelete = (props) => {
  const { show, setShow, dataDeleteUser } = props;

  const handleClose = () => setShow(false);

  const handleSubmitDelete = async () => {
    let res = await deleteUsers(dataDeleteUser.id);
    console.log("check res:", res);
    if (res && res.status === 204) {
      toast.success("Delete user successfully");
      props.handleDeleteUser(dataDeleteUser);
      handleClose();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Delete User </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">
                Are you sure Delete: <b>{dataDeleteUser.email}</b>
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDelete()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
