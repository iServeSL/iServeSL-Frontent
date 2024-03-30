import React, { useState, useEffect } from "react";
import Logo from "../assets/iServeSL.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    if (jwtToken) {
      // User already logged in, navigate to dashboard
      dashboardNavigate();
    }
  }, []);

  const registerNavigate = () => {
    navigate("/signup");
  };

  const welcomeNavigate = () => {
    navigate("/");
  };

  const dashboardNavigate = () => {
    navigate("/dashboard");
  };

  /**
   * Handles the login process when the user submits the form.
   * Sends a request to the server for authentication.
   */
  const handleLogin = async () => {
    if (email && password) {
      try {
        // Send authentication request to the server
        const response = await axios.post("http://localhost:3001/api/login", {
          email: email,
          password: password,
        });

        // Extract user email, and JWT token from the response
        const { token } = response.data;

        // Store the email, and token in cookies
        Cookies.set("email", email, { expires: 7 });
        Cookies.set("jwtToken", token, { expires: 1 });

        // Navigate to the dashboard after successful login
        dashboardNavigate();
      } catch (error) {
        // Handle authentication error
        console.error("Login error:", error);
        setIncorrectPassword(true);
        setEmptyFields(false);
      }
    } else {
      // Set validation flags for empty fields
      setEmptyFields(true);
      setIncorrectPassword(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          onClick={welcomeNavigate}
          className="cursor-pointer flex items-center mb-6 text-4xl font-bold text-[#ff7300] dark:text-[#ff7300]"
        >
          <img className="w-32 h-auto" src={Logo} alt="logo" />
          iServeSL
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                  ${
                    (incorrectPassword || emptyFields) && !email
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="name@email.com"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {(incorrectPassword || emptyFields) && !email && (
                  <p className="text-red-500 text-xs mt-1">
                    Email cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                  ${
                    (incorrectPassword || emptyFields) && password
                      ? "border-red-500"
                      : ""
                  }`}
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {(incorrectPassword || emptyFields) && !password && (
                  <p className="text-red-500 text-xs mt-1">
                    Password cannot be empty
                  </p>
                )}
                {(incorrectPassword || emptyFields) && password && (
                  <p className="text-red-500 text-xs mt-1">
                    Incorrect email or password
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="btnHoverEffect w-full text-white bg-[#ff7300] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  onClick={registerNavigate}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
