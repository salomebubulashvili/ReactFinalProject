import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import routes from "../constants/routes";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const { state } = useAppContext();

  if (!state.isUserLoggedIn) {
    return (
      <div>
        <h1>Movies page</h1>
        <h2>Please sign in</h2>
        <button
          onClick={() => {
            navigate(routes.register);
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            navigate(routes.logIn);
          }}
        >
          Log in
        </button>
      </div>
    );
  } else {
    return children; // Render the children when user is logged in
  }
};

export default AuthGuard;