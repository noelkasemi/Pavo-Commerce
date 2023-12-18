import React from "react";
import LoginForm from "./Login";
import SignupForm from "./SignUp";
import ContactForm from "./Contact";
import { useState, useEffect } from "react";
import ForgotPassword from "./ForgotPassword";

const Form = ({ type, navigateTo }) => {
  // State for track password input
  const [password, setPassword] = useState("");
  // state for tracking password errors
  const [passwordError, setPasswordError] = useState("");
  // state for tracking passwordConfirmation
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // State for checking if passwords match
  const [confirmationError, setConfirmationError] = useState("");
  // state for tracking form if and when its submited
  const [formSubmitted, setFormSubmitted] = useState(false);
  // State for tracking the selected file
  const [selectedFile, setSelectedFile] = useState(null);

  //State to track email input
  const [email, setEmail] = useState("");
  //State to track email error
  const [emailError, setEmailError] = useState("");
  //State to track email confirmation
  const [emailConfirmation, setEmailConfirmation] = useState("");
  //State for checking if emails match
  const [emailConfirmationError, setEmailConfirmationError] = useState("");

  //Handles email input and changes the state based on what's inputed
  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  //Handles email confirmation and changes the state based on whats inputed
  const handleEmailConfirmationChange = (e) => {
    const newEmailConfirmation = e.target.value
    setEmailConfirmation(newEmailConfirmation)
  }

  useEffect(() => {
    if (formSubmitted) {
      // Validates email if it's the same as email confirmation
      if (emailConfirmation && email !== emailConfirmation) {
        setEmailConfirmationError("Email confirmation does not match");
      } else {
        setEmailConfirmationError("");
      }
    }
  }, [formSubmitted, email, emailConfirmation]);

  // Handles password input and changes the state based on whats inputed
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  // Handle password confirmation input and changes the state based on whats inputed
  const handlePasswordConfirmationChange = (e) => {
    const newPasswordConfirmation = e.target.value;
    setPasswordConfirmation(newPasswordConfirmation);
  };

  // Handles file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (formSubmitted) {
      // Validates password length after form submission
      if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters");
      } else {
        // Password length is fine
        setPasswordError("");
        // Validates password if its the same as password confirmation
        if (passwordConfirmation && password !== passwordConfirmation) {
          setConfirmationError("Password confirmation does not match");
          //Both passwords match
        } else {
          setConfirmationError("");
        }
      }
    }
  }, [formSubmitted, password, passwordConfirmation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the formSubmitted flag to true on form submission
    setFormSubmitted(true);
    //resets form if no errors
    if (passwordError === "" && passwordConfirmation === "" || emailError === '' && emailConfirmationError === '') {
      setPassword("");
      setPasswordConfirmation("");
      setEmailError('')
      setEmailConfirmationError('')
    }
  };

  return (
    <section className={`${type === 'signup' || type === 'contact' ? 'py-32' : ''} relative flex flex-col bg-[#eeecee] justify-center min-h-screen overflow-hidden`}>
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl"
      >
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          {type === "contact"
            ? "Contact Us"
            : type === "signup"
            ? "Sign Up"
            : type === "forgotPassword"
            ? "Forgot Password"
            : "Login"}
        </h1>
        {type === "login" && (
          <LoginForm handleSubmit={handleSubmit} navigateTo={navigateTo} />
        )}
        {type === "signup" && (
          <SignupForm
            handlePasswordChange={handlePasswordChange}
            handlePasswordConfirmationChange={handlePasswordConfirmationChange}
            password={password}
            passwordError={passwordError}
            confirmationError={confirmationError}
            navigateTo={navigateTo}
            passwordConfirmation={passwordConfirmation}
          />
        )}
        {type === "contact" && (
          <ContactForm
            handleSubmit={handleSubmit}
            handleFileChange={handleFileChange}
          />
        )}
        {type === "forgotPassword" && (
          <ForgotPassword
            handleEmailChange={handleEmailChange}
            handleEmailConfirmationChange={handleEmailConfirmationChange}
            email={email}
            emailError={emailError}
            emailConfirmationError={emailConfirmationError}
            navigateTo={navigateTo}
            emailConfirmation={emailConfirmation}
          />
        )}
      </form>
    </section>
  );
};

export default Form;
