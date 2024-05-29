import React, { useState } from "react";
import routes, { inputs } from "../constants/routes";
import MyInput from "./Input";
import { authUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    authUser(user, "register")
      .then(() => {
        navigate(routes.logIn, { state: { success: true } });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <form onSubmit={SubmitHandler}>
      {inputs.map((input) => (
        <MyInput setUser={setUser} key={input.name} data={input} />
      ))}
      <button type="submit">Register</button>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
    </form>
  );
};
export default RegisterForm;