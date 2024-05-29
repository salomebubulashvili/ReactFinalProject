import React, { useState } from "react";
import routes from "../constants/routes";
import { authUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import { signInUser } from "../context/appActionCreators";

// Define the MyInput component outside of SignInForm
const MyInput = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        autoComplete="true"
        type={name === "password" ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const SignInForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    authUser({ userName, password }, "login")
      .then((data) => {
        console.log(data);
        // Redirect to the Movies page after successful login
        dispatch(signInUser(data.token));
        navigate(routes.Movies);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        label="User Name"
        name="userName"
        value={userName}
        onChange={handleUserNameChange}
      />
      <MyInput
        label="Password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Log in</button>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
    </form>
  );
};

export default SignInForm;