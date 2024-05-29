import actions from "./AppActions";

export const signInUser = (payload) => {
  return {
    type: actions.signInUser,
    payload,
  };
};