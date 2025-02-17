import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Header from "../components/Header";

function LoginPage() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = user
    console.log(user)
    try {
      const { data } = await axios.post("/login", {
        email,
        password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setUser({ email: "", password: "" })
        navigate("/dashboard")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className="w-full lg:flex flex-col items-center">
      <Header />
      <div className="w-full flex flex-col justify-center items-center lg:max-w-md lg:w-5/12 lg:border lg:border-gray-300 lg:bg-gray-50">
        <h3 className="text-black text-3xl mb-8 md:mt-8">Log in</h3>
        <form className="w-5/6 md:w-5/12 lg:w-5/6" onSubmit={handleSubmit}>
          <div className="mb-8 flex flex-col items-start">
            <label className="text-gray-500 text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border border-gray-300 focus:outline-none focus:border-black text-black rounded hover:border-gray-400"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-8 flex flex-col items-start">
            <label className="text-gray-500 text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border border-gray-300 focus:outline-none focus:border-black text-black rounded hover:border-gray-400"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex justify-between mb-8">
            <div>
              <input
                className="mr-2"
                type="checkbox"
                name="rememberme"
                id="rememberme"
              />
              <label className="text-sm text-black" htmlFor="rememberme">
                Remember Me
              </label>
            </div>
            <a className="text-sm" href="http://">
              Forgot Password
            </a>
          </div>
          <div>
            <button className="w-full">Log in</button>
          </div>
          <hr className="border-t-2 border-black w-full h-2 mt-8" />
        </form>
        <div className="w-5/6 flex justify-center text-black text-sm mt-8 lg:mb-8">
          Don't have an account?
          <Link className="ml-2" to="/register">
            Sign up today
          </Link>
        </div>
      </div>
      <footer className="w-full fixed bottom-0 left-0 text-center mt-8 mb-8 text-sm text-gray-300">
        © Scout 2024
      </footer>
    </div>
  );
}

export default LoginPage;
