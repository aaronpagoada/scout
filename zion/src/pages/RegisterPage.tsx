import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import FormInput from "../components/FormInput";

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserErrors {
  username: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

function RegisterPage() {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<UserErrors>({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const [focused, setFocused] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      pattern: `^[A-Za-z0-9]{3,16}$`,
      errorMessage:
        "Username should be 3-16 characters and should not include special characters",
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      pattern:
        "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$",
      errorMessage: "Invalid email",
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      required: true,
      password: user.password,
      errorMessage: "Passwords do not match",
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUEBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(focused, e.target.name)
    setFocused({ ...focused, [e.target.name]: true })

    console.log(new RegExp(e.target.pattern).test(e.target.value))
    if (new RegExp(e.target.pattern).test(e.target.value)) {

      setErrors({ ...errors, [e.target.name]: false })
    } else {

      setErrors({ ...errors, [e.target.name]: true })
    }
    console.log(user, focused, errors)

    // bruh the state seems not be changing, maybe investiagte there
  }

  const validateConfirmPassword = (password: string, value: string): boolean => {
    console.log(password, value)
    return password.localeCompare(value) === 0 ? true : false
  }

  const handlePWBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleUEBlur(e)

    if (focused.confirmPassword) {
      validateConfirmPassword(user.password, user.confirmPassword) ?
        setErrors({ ...errors, confirmPassword: false }) :
        setErrors({ ...errors, confirmPassword: true })
    }

    // figure out why the password pattern check is failing even when password is valid,
  }

  const handleCPWBlur = () => {
    setFocused({ ...focused, confirmPassword: true })
    validateConfirmPassword(user.password, user.confirmPassword) ?
      setErrors({ ...errors, confirmPassword: false }) :
      setErrors({ ...errors, confirmPassword: true })
  }

  return (
    <div className="w-full lg:flex flex-col items-center">
      <Header />
      <div className="w-full flex flex-col justify-center items-center lg:max-w-md lg:w-1/3 lg:border lg:border-gray-300 lg:bg-gray-50">
        <h3 className="text-black text-3xl mb-8 md:mt-8">Sign up</h3>
        <form className="w-5/6 md:w-5/12 lg:w-5/6" onSubmit={handleSubmit}>
          <div className="mb-8 flex flex-col items-start">
            <label className="text-gray-500 text-sm" htmlFor="username">
              Username
            </label>
            <input
              className={`transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border ${errors.username ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-black text-black rounded hover:border-gray-400`}
              onChange={handleChange}
              onBlur={handleUEBlur}
              name="username"
              pattern="^[A-Za-z0-9]{3,16}$"
              required
              type="text"
            />
            {errors.username && focused.username && (
              <span className="text-red-500 text-xs">
                Username should be 3-16 characters and should not include special characters
              </span>
            )}
          </div>
          <div className="mb-8 flex flex-col items-start">
            <label className="text-gray-500 text-sm" htmlFor="email">
              Email
            </label>
            <input
              className={`transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border ${errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-black text-black rounded hover:border-gray-400`}
              onChange={handleChange}
              onBlur={handleUEBlur}
              name="email"
              pattern="^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$"
              required
              type="email"
            />
            {errors.email && focused.email && (
              <span className="text-red-500 text-xs">
                Invalid email
              </span>
            )}
          </div>
          <div className="mb-8 flex flex-col items-start">
            <label className="text-gray-500 text-sm" htmlFor="password">
              Password
            </label>
            <input
              className={`transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border ${errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-black text-black rounded hover:border-gray-400`}
              onChange={handleChange}
              onBlur={handlePWBlur}
              name="password"
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
              required
              type="password"
            />
            {errors.password && focused.password && (
              <span className="text-red-500 text-xs">
                Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character
              </span>
            )}
          </div>
          <div className="mb-8 flex flex-col items-start">
            <label className="text-gray-500 text-sm" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className={`transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-black text-black rounded hover:border-gray-400`}
              onChange={handleChange}
              onBlur={handleCPWBlur}
              name="confirmPassword"
              required
              type="password"
            />
            {errors.confirmPassword && focused.confirmPassword && (
              <span className="text-red-500 text-xs">
                Passwords do not match
              </span>
            )}
          </div>
          <div>
            <button className="w-full">Sign up</button>
          </div>
          <hr className="border-t-2 border-black w-full h-2 mt-8" />
        </form>
        <div className="w-5/6 flex justify-center text-black text-sm mt-8 lg:mb-8">
          Already have an account?
          <Link className="ml-2" to="/login">
            Log in
          </Link>
        </div>
      </div>
      <footer className="w-full fixed bottom-0 left-0 text-center text-sm mt-8 mb-8 text-gray-300">
        © Scout 2024
      </footer>
    </div>
  );
}

export default RegisterPage;
