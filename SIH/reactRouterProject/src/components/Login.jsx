// src/components/Login.jsx
import React from "react";
import LoginForm from "./LoginForm";

const Login = () => (
  <LoginForm
    title="Log In"
    buttonText="Log In"
    linkText="Don't have an account? Sign Up"
    linkTo="/signup"
    type="login"
  />
);

export default Login;
