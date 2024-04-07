import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [loginFormData, setLoginFormData] = useState({
    loginEmail: '',
    loginPassword: ''
  });

  const [registerFormData, setRegisterFormData] = useState({
    registerName: '',
    registerDOB: '',
    registerEmail: '',
    registerPassword: ''
  });

  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', loginFormData);
      console.log(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', registerFormData);
      console.log(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login or Register</h3></div>
            <div className="card-body">
              <form onSubmit={handleLoginSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    name="loginEmail"
                    placeholder="name@example.com"
                    value={loginFormData.loginEmail}
                    onChange={handleLoginChange}
                    required
                  />
                  <label htmlFor="loginEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Password"
                    value={loginFormData.loginPassword}
                    onChange={handleLoginChange}
                    required
                  />
                  <label htmlFor="loginPassword">Password</label>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
              <hr />
              <form onSubmit={handleRegisterSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="registerName"
                    name="registerName"
                    placeholder="Your Name"
                    value={registerFormData.registerName}
                    onChange={handleRegisterChange}
                    required
                  />
                  <label htmlFor="registerName">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="registerDOB"
                    name="registerDOB"
                    value={registerFormData.registerDOB}
                    onChange={handleRegisterChange}
                    required
                  />
                  <label htmlFor="registerDOB">Date of Birth</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="registerEmail"
                    name="registerEmail"
                    placeholder="name@example.com"
                    value={registerFormData.registerEmail}
                    onChange={handleRegisterChange}
                    required
                  />
                  <label htmlFor="registerEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="registerPassword"
                    name="registerPassword"
                    placeholder="Password"
                    value={registerFormData.registerPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                  <label htmlFor="registerPassword">Password</label>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center py-3">
              <div className="small"><Link to="/login">Already have an account? Sign in!</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
