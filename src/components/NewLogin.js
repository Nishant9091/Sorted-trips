import React, { useState } from "react";
import HomeImg2 from "../assets/logo.png";
import "./LoginPage.css";

const NewLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [isNewCustomer, setIsNewCustomer] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleLogin = () => {
    console.log("username:", username);
    console.log("password:", password);

    // Add your login logic here
    if (username === "user" && password === "password") {
      alert("Login successful");
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleCreateAccount = () => {
    console.log("username:", username);
    console.log("password:", password);
    console.log("fullName:", fullName);

    // Add your new account creation logic here
    if (username && password && fullName) {
      alert("Account created successfully");
      setUsername("");
      setPassword("");
      setFullName("");
      setIsNewCustomer(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleToggleCustomer = () => {
    setIsNewCustomer(!isNewCustomer);
    setUsername("");
    setPassword("");
    setFullName("");
  };

  const renderForm = () => {
    if (isNewCustomer) {
      return (
        <>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-group">
            <label> Confirm Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            <img
              src="https://www.pngitem.com/pimgs/m/188-1886417_cuisine-vector-business-food-travel-illustration-indian-happiness.png"
              alt="logo"
              style={{ width: "-webkit-fill-available", height: "auto" }}
            />
          </div>

          <div className="login-card">
            <img
              src={HomeImg2}
              alt="logo"
              style={{ width: "80px", height: "auto" }}
            />
            <h2>{isNewCustomer ? "Sign up" : "Login"}</h2>
            {renderForm()}
            <button
              className="login-button"
              onClick={isNewCustomer ? handleCreateAccount : handleLogin}
            >
              {isNewCustomer ? "Create Account" : "Login"}
            </button>
            <p>
              {isNewCustomer ? "Already have an account?" : "New customer?"}
              <span className="toggle-link" onClick={handleToggleCustomer}>
                {isNewCustomer ? "Login here" : "Create an account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewLogin;
