import { parseToken, toggleStorage } from "../utils";
import actions from "./AppActions";

export const initialState = {
  isUserLoggedIn: false,
  user: null,
  token: "",
};

export const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.signInUser: {
      const user = parseToken(payload);
      toggleStorage(payload);
      return { ...state, isUserLoggedIn: true, token: payload, user };
    }

    default:
      return state;
  }
};