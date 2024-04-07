import React from 'react';

function Table({ userInfo }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">User Information</h3></div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Email</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userInfo.name}</td>
                    <td>{userInfo.dob}</td>
                    <td>{userInfo.email}</td>
                    <td>{userInfo.password}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
