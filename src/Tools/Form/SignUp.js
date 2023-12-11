import React from "react";
import Tooltip from "../Tooltip";
import { useState } from "react";
import InfoIcon from '../../assets/Svg/InfoIcon';

const SignupForm = ({
  handlePasswordChange,
  handlePasswordConfirmationChange,
  password,
  passwordConfirmation,
  passwordError,
  confirmationError,
  navigateTo,
}) => {
        // State for tracking hover state of the tooltip
        const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <label
        htmlFor="name"
        className="block text-sm font-semibold text-gray-800"
      >
        Name
      </label>
      <input
        autoComplete="current-name"
        id="name"
        placeholder="Your name"
        required
        type="text"
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />

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
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />

      <label
        htmlFor="password"
        className="block flex items-center text-sm font-semibold text-gray-800"
      >
        Password{" "}
        <Tooltip
          panelStyle={`bg-black px-2 py-1 rounded absolute w-[300px] `}
          show={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          buttonChildren={<InfoIcon style={`w-4 h-4 mt-2 ml-1`} />}
        >
          {isHovered && (
            <p className="text-white text-xs italic">
              "Please ensure your password is strong and contains at least 8
              characters."
            </p>
          )}
        </Tooltip>
      </label>
      <input
        required
        placeholder="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className={`block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 ${
          confirmationError && passwordError ? "border-red-500" : ""
        }`}
      />
      {passwordError && (
        <p className="text-xs text-red-500 mt-1">{passwordError}</p>
      )}

      <label
        htmlFor="passwordConfirmation"
        className="block flex mt-4 items-center text-sm font-semibold text-gray-800"
      >
        Confirm Password
      </label>
      <input
        required
        placeholder="Confirm Password"
        id="passwordConfirmation"
        type="password"
        value={passwordConfirmation}
        onChange={handlePasswordConfirmationChange}
        className={`block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 ${
          confirmationError && "border-red-500"
        }`}
      />
      {confirmationError && (
        <p className="text-xs text-red-500 mt-1">{confirmationError}</p>
      )}

      <button
        type="submit"
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 mt-4"
      >
        Sign Up
      </button>

      <p className="mt-8 text-xs font-light text-center text-gray-700">
        Already have an account?{" "}
        <button
          onClick={() => navigateTo("login")}
          className="font-medium text-purple-600 hover:underline"
        >
          Login
        </button>
      </p>
    </>
  );
};

export default SignupForm;
