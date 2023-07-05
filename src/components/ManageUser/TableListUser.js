const TableListUser = (props) => {
  const { listUsers } = props;
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Email</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, idx) => {
            return (
              <tr key={`list-users-${idx}`}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default TableListUser;
