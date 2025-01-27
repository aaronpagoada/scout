import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface User {
  username: string;
  email: string;
  password: string;
}

function RegisterPage() {
  const navigate = useNavigate()

  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false
  })

  const [focused, setFocused] = useState({
    username: false,
    email: false,
    password: false
  })

  const [visibility, setVisibility] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = user

    try {
      const { data } = await axios.post("/register", {
        username, email, password
      })
      if (data.error) {
        toast.error(data.error);
      } else {
        setUser({ username: "", email: "", password: "" })
        toast.success("Registration successful. Welcome!")
        navigate("/login")
      }
    } catch (error) {
      console.error(error)
    }
  };

  // figure out why onSubmit not working on button click on mobile

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUEBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused({ ...focused, [e.target.name]: true })

    if (new RegExp(e.target.pattern).test(e.target.value)) {
      setErrors({ ...errors, [e.target.name]: false })
    } else {
      setErrors({ ...errors, [e.target.name]: true })
    }
  }

  const handlePWBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused({ ...focused, password: true })

    const regex = new RegExp(e.target.pattern);
    if (regex.test(user.password)) {
      console.log("Good pass")
      setErrors({ ...errors, password: false })
    } else {
      console.log("bad pass")
      setErrors({ ...errors, password: true })
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setVisibility(!visibility)

    const passwordInput = document.getElementById("password") as HTMLInputElement
    passwordInput.type === "password" ? passwordInput.type = "text" : passwordInput.type = "password"
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
              pattern="[A-Za-z0-9]{3,16}"
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
              pattern="[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*"
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
            <div className="relative inline-block w-full">
              <input
                className={`transition duration-150 ease-linear w-full h-9 pl-2 pr-12 border ${errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-black text-black rounded hover:border-gray-400`}
                onChange={handleChange}
                onBlur={handlePWBlur}
                name="password"
                id="password"
                pattern="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}"
                required
                type="password"
              />
              <button className="bg-transparent absolute bottom-0 right-0 pr-3 hover:bg-transparent h-full flex justify-center items-center" onClick={handleClick}>
                {!visibility ? (<VisibilityOffOutlinedIcon fontSize="small" sx={{ color: '#9ca3af' }} />) : (<VisibilityOutlinedIcon fontSize="small" sx={{ color: '#9ca3af' }} />)}
              </button>
            </div>
            {errors.password && focused.password && (
              <span className="text-red-500 text-xs">
                Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character
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
