import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { appReducer, initialState } from "./AppReducer";
import { signInUser } from "./AppActionCreators";
import { validateToken } from "../utils";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && validateToken(token)) {
      dispatch(signInUser(token));
    }
  }, []);
  useEffect(() => {
    console.log("User is logged in:", state.isUserLoggedIn);
  }, [state.isUserLoggedIn]);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }

  throw new Error("app context error");
};

export default AppContextProvider;