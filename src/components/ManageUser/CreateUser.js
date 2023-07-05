import Accordion from "react-bootstrap/Accordion";
import { FcPlus } from "react-icons/fc";
import "./CreateUser.scss";
import { useState } from "react";
import { postListUsers } from "../../services/apiService";
import { toast } from "react-toastify";

function CreateUser(props) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async () => {
    if (name === "" || job === "") {
      toast.error("Check your name and job");
    } else {
      let res = await postListUsers(name, job);
      console.log("check res", res.data);
      if (res && res.data) {
        toast.success("Successfully created user");
        setName("");
        setJob("");
        await props.addNewUser({
          id: res.data.id,
          first_name: res.data.name,
        });
      } else {
        toast.error("Error creating user");
      }
    }
  };
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="title-accordion">
          <FcPlus />
          Create User
        </Accordion.Header>
        <Accordion.Body>
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CreateUser;
