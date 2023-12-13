import React from 'react';

const LoginForm = ({ handleSubmit, navigateTo }) => {
  return (
    <>
      <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
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

      <label htmlFor="password" className="block flex items-center text-sm font-semibold text-gray-800">
        Password
      </label>
      <input
        id="password"
        placeholder="Password"
        required
        type="password"
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />

      <button onClick={() => navigateTo('forgotPassword')} className="text-xs text-purple-600 hover:underline">
        Forgot Password?
      </button>

      <button
        type="submit"
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 mt-4"
      >
        Login
      </button>

      <p className="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?{' '}
        <button onClick={() => navigateTo('signup')} className="font-medium text-purple-600 hover:underline">
          Sign Up
        </button>
      </p>
    </>
  );
}

export default LoginForm;
