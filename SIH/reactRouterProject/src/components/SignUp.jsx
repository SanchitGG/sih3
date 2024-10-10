// src/components/SignUp.jsx
import React from "react";
import AuthForm from "./AuthForm";

const SignUp = () => (
  <AuthForm
    title="Sign Up"
    buttonText="Create Account"
    linkText="Already have an account? Log In"
    linkTo="/login"
    type="signup"
  />
);

export default SignUp;
