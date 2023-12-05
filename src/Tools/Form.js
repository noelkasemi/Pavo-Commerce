import {Tooltip, InfoIcon, useState, useEffect} from '../Page/Partials/Imports'

export default function Form({ type, navigateTo }) {
  // State for tracking hover state of the tooltip
  const [isHovered, setIsHovered] = useState(false);
  // State for trac password input
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
    // Validates password length after form submission
    if (formSubmitted) {
      if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters");
      } else {
        // Validates password if its the same as password confirmation
        if (passwordConfirmation && password !== passwordConfirmation) {
          setConfirmationError("Password confirmation does not match");
        } else {
          setConfirmationError("");
        }
      }
      setPasswordError("");
    }
  }, [formSubmitted, password, passwordConfirmation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the formSubmitted flag to true on form submission
    setFormSubmitted(true);
    //resets form if no errors
    if (passwordError === "" && passwordConfirmation === "") {
      setPassword("");
      setPasswordConfirmation("");
    }
  };

  return (
    <main className="relative pt-24 pb-14 flex flex-col bg-[#eeecee] justify-center min-h-screen overflow-hidden">
      {/* Form Section */}
      <section className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        {/* Form Title based on which form is displayed */}
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          {type === "contact"
            ? "Contact Us"
            : type === "signup"
            ? "Sign Up"
            : "Login"}
        </h1>
        {/* Form Element */}
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Name Input (Visible for signup and contact forms) */}
          {type === "signup" || type === "contact" ? (
            <article className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                autocomplete="current-name"
                id="name"
                placeholder="Your name"
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </article>
          ) : (
            ""
          )}

          {/* Email Input */}
          <article className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              autocomplete="current-email"
              id="email"
              placeholder="example@gmail.com"
              required
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </article>

          {/* Password Input (Visible for login and signup forms each with their seperate input) */}
          {type !== "contact" ? (
            <article className="mb-2">
              <label
                // label for password (if login page its for Login Password if Sign Up page its for Sign Up Password)
                htmlFor={`${
                  type === "login" ? "Login Password" : "Sign Up Password"
                }`}
                className="block flex items-center text-sm font-semibold text-gray-800"
              >
                Password
                {/* Tooltip explaining how the password should be (only visible for signup form) */}
                {type === "signup" && (
                  <Tooltip
                    panelStyle={`bg-black px-2 py-1 rounded absolute w-[300px] `}
                    show={isHovered}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    buttonChildren={<InfoIcon style={`w-4 h-4 mt-2 ml-1`} />}
                  >
                    {isHovered && (
                      <p className="text-white text-xs italic">
                        "Please ensure your password is strong and contains at
                        least 8 characters."
                      </p>
                    )}
                  </Tooltip>
                )}
              </label>
              {type === "login" ? (
                <input
                  id="Login Password"
                  placeholder="Password"
                  required
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              ) : (
                <>
                  <input
                    required
                    placeholder="Password"
                    id="Sign Up Password"
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
                </>
              )}

              {/* Confirm Password Input (Visible for signup form only) */}
              {type === "signup" && (
                <>
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
                    <p className="text-xs text-red-500 mt-1">
                      {confirmationError}
                    </p>
                  )}
                </>
              )}
            </article>
          ) : (
            // Message Input (Visible for contact form only)
            <article className="mb-2">
              <label
                htmlFor="Message"
                className="block text-sm font-semibold text-gray-800"
              >
                {type === "contact" ? "Message" : "Password"}
              </label>
              <textarea
                rows="5"
                placeholder="Your Message..."
                name="Message"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              ></textarea>
            </article>
          )}

          {/* File Input (Visible for contact form only) */}
          {type === "contact" && (
            <article className="mb-2">
              <label
                htmlFor="media"
                className="block flex  text-sm font-semibold text-gray-800"
              >
                Media{" "}
                <Tooltip
                  panelStyle={`bg-black px-2 py-1 rounded absolute w-[300px] `}
                  show={isHovered}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  buttonChildren={<InfoIcon style={`w-4 h-4 mt-[1px] ml-1`} />}
                >
                  {isHovered && (
                    <p className="text-white text-xs italic">
                      Accepted formats: .png, .jpg, .avif, .webp, etc
                    </p>
                  )}
                </Tooltip>
              </label>
              <input
                type="file"
                id="media"
                accept=".png, .jpg, .avif, .webp"
                onChange={handleFileChange}
                className="block cursor-pointer w-full mt-2 border-dashed border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-purple-400 focus:ring focus:ring-purple-300"
              />
            </article>
          )}

          {/* Forget Password Link (Visible for login form only) */}
          {type === "login" && (
            <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
          )}

          {/* Submit Button */}
          <article className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              {type === "contact"
                ? "Submit"
                : type === "signup"
                ? "Sign Up"
                : "Login"}
            </button>
          </article>
        </form>

        {/* Switch between Login and Sign Up Section */}
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {type === "contact"
            ? ""
            : type === "signup"
            ? "Already have an account? "
            : "Don't have an account? "}
          <button
            onClick={
              type === "signup"
                ? () => navigateTo("login")
                : type === "login"
                ? () => navigateTo("signup")
                : ""
            }
            className="font-medium text-purple-600 hover:underline"
          >
            {type === "contact" ? "" : type === "signup" ? "Login" : "Sign Up"}
          </button>
        </p>
      </section>
    </main>
  );
}
