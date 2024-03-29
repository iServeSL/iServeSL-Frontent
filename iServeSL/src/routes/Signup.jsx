import React, { useState } from "react";
import Logo from "../assets/iServeSL.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    profession: "",
    contact: "",
  });

  const addUser = async () => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:3001/api/user", newUser);
      setNewUser({
        username: "",
        email: "",
        password: "",
        profession: "",
        contact: "",
      });
      loginNavigate();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginNavigate = () => {
    navigate("/login");
  };

  const welcomeNavigate = () => {
    navigate("/");
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
              Create new account
            </h1>
            <form className="space-y-4 md:space-y-6 flex flex-wrap" action="#">
              <div className="flex w-full space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john"
                    value={newUser.username}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@email.com"
                    value={newUser.email}
                    onChange={handleChange}
                    required=""
                  />
                </div>
              </div>
              <div className="flex w-full space-x-4">
                <div className="w-1/2">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={newUser.password}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>
              <div className="flex w-full space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    id="profession"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="lecturer"
                    value={newUser.profession}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="contact"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contact
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="contact"
                      id="contact"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 pl-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="xxxxxxxxx"
                      value={newUser.contact}
                      onChange={handleChange}
                      required=""
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 dark:text-gray-400">
                      +94{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btnHoverEffect w-full text-white bg-[#ff7300] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente dark:focus:ring-primary-800"
                onClick={addUser}
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  onClick={loginNavigate}
                  className="cursor-pointer font-medium text-primary-600 hover:underline"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
