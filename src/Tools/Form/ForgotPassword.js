import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({
  handleSubmit,
  navigateTo,
  handleEmailChange,
  handleEmailConfirmationChange,
  email,
  emailConfirmation,
  emailError,
  emailConfirmationError,
}) => {
  const navigate = useNavigate()
  return (
    <>
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-gray-800"
      >
        Email
      </label>
      <input
        autoComplete="current-email"
        id="email"
        placeholder="example@gmail.com"
        required
        type="email"
        value={email}
        onChange={handleEmailChange}
        className={`block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 ${
          emailConfirmationError && emailError ? "border-red-500" : ""
        }`}
      />
      {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
      <label
        htmlFor="confirmEmail"
        className="block text-sm font-semibold mt-4 text-gray-800"
      >
        Confirm Email
      </label>
      <input
        id="confirmEmail"
        placeholder="example@gmail.com"
        required
        type="email"
        value={emailConfirmation}
        onChange={handleEmailConfirmationChange}
        className={`block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 ${
          emailConfirmationError && "border-red-500"
        }`}
      />
      {emailConfirmationError && (
        <p className="text-xs text-red-500 mt-1">{emailConfirmationError}</p>
      )}

      <button
        type="submit"
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 mt-4"
      >
        Reset Password
      </button>

      <p className="mt-8 text-xs font-light text-center text-gray-700">
        Remember your password?{" "}
        <button
          onClick={() => navigate("/login")}
          className="font-medium text-purple-600 hover:underline"
        >
          Login
        </button>
      </p>
    </>
  );
};

export default ForgotPassword;
