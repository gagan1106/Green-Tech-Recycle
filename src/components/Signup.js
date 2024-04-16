import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">
          <h2>SignUp</h2>
        </div>
        <div className="form">
          <form>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          <p style={{ fontFamily: "Titillium web", marginTop: "5%" }}>
            Already Registered? <Link to={"/login"}>Click here</Link> to login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
