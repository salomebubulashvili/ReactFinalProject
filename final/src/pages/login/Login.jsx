import React from "react";
import { useLocation } from "react-router-dom";
import SingInForm from "../../components/SignInForm";

const Login = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Login page</h1>
      {location?.state?.success && <h1>Congrats !!! successfull register</h1>}
      <SingInForm />
    </div>
  );
};
export default Login;