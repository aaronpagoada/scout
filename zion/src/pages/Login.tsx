import React, { useState } from "react";
import Header from "../components/Header";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="text-black text-3xl mb-8">Log in</h3>
        <form className="w-5/6" action="">
          <div className="mb-8 flex flex-col items-start">
            <label className="text-black" htmlFor="email">
              Email
            </label>
            <input
              className="w-full h-9 pl-2 pr-6 border border-gray-300 focus:outline-none focus:border-black text-black rounded"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-8 flex flex-col items-start">
            <label className="text-black" htmlFor="password">
              Password
            </label>
            <input
              className="w-full h-9 pl-2 pr-6 border border-gray-300 focus:outline-none focus:border-black text-black rounded"
              id="password"
              type="password"
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
              <label className="text-black" htmlFor="rememberme">
                Remember Me
              </label>
            </div>
            <a href="http://">Forgot Password</a>
          </div>
          <div>
            <button className="w-full">Log in</button>
          </div>
        </form>
        <hr className="border-t-2 border-black w-5/6 h-2 mt-8" />
        <div className="w-5/6 flex justify-center text-black mt-7">
          Don't have an account?
          <a className="ml-2" href="http://localhost:5173/register">
            Sign up today
          </a>
        </div>
      </div>
      <footer className="w-full fixed bottom-0 left-0 text-center mt-8 mb-8 text-gray-300">
        © Scout 2024
      </footer>
    </>
  );
}

export default LoginPage;
