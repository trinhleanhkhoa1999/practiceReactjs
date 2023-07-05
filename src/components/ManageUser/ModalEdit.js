import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putListUsers } from "../../services/apiService";
import { toast } from "react-toastify";

const ModalEdit = (props) => {
  const { show, setShow, dataEditUser } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (dataEditUser) {
      setName(dataEditUser.first_name);
    }
  }, [dataEditUser]);
  const handleSubmitEdit = async () => {
    let res = await putListUsers(name, job);
    props.handleEditUser({
      first_name: name,
      id: dataEditUser.id,
    });
    toast.success("Susses updated user");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Edit User </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input
                type="text"
                className="form-control"
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEdit;
