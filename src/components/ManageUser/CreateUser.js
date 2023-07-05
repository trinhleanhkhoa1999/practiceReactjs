import Accordion from "react-bootstrap/Accordion";
import { FcPlus } from "react-icons/fc";
import "./CreateUser.scss";
import { useState } from "react";
import { postListUsers } from "../../services/apiService";

function CreateUser() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async () => {
    let res = await postListUsers(name, job);

    console.log("check res", res.data.data.data);
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
            <button className="btn btn-primary" onClick={() => handleSubmit()}>
              Submit
            </button>
          </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CreateUser;
