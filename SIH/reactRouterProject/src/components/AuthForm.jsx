import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { userRoleState } from "../../../State/state"; // Import the atom

const AuthForm = ({ title, buttonText, linkText, linkTo, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "" });
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  const setUserRole = useSetRecoilState(userRoleState); // Hook to set the user role

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "signup" && formData.password !== confirmPassword) {
      setError("Passwords do not match");
      return; // Prevent submission if passwords don't match
    }
    
    // Create a FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    if (type === "signup") {
      formDataToSend.append("username", formData.username);
      formDataToSend.append("role", formData.role === "Freelancer" ? "F" : "C"); // Map to 'F' or 'C'
    } else {
      formDataToSend.append("role", formData.role === "Freelancer" ? "F" : "C"); // Add role for login
    }

    try {
      const response = await fetch(`http://localhost:5000/signup`, {
        method: "POST",
        body: formDataToSend, // Send FormData directly
      });

      if (!response.ok) throw new Error("Failed to create account");

      // Set the Recoil state to the user role
      setUserRole(formData.role); // Update Recoil atom with the selected role

      navigate("/"); // Redirect on successful signup/login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">{title}</h2>

        {error && <div className="text-red-500 text-center">{error}</div>} {/* Error message display */}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Username - Only for Sign Up */}
            {type === "signup" && (
              <>
                <div>
                  <label htmlFor="username" className="sr-only">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#c2410c] focus:border-[#c2410c] sm:text-sm"
                    placeholder="Username"
                  />
                </div>

                {/* Dropdown for selecting role */}
                <div>
                  <label htmlFor="role" className="sr-only">Who are you?</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-[#c2410c] focus:border-[#c2410c] sm:text-sm"
                  >
                    <option value="">Select who you are</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Client">Client</option>
                  </select>
                </div>
              </>
            )}

            {/* Email - Present in both Sign Up and Login */}
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#c2410c] focus:border-[#c2410c] sm:text-sm"
                placeholder="Email address"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#c2410c] focus:border-[#c2410c] sm:text-sm"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Confirm Password - Only for Sign Up */}
            {type === "signup" && (
              <div className="relative">
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Handle confirm password change
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#c2410c] focus:border-[#c2410c] sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#c2410c] to-[#f87171] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c2410c]"
            >
              {buttonText}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <Link to={linkTo} className="font-medium text-[#c2410c] hover:text-[#f87171]">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
