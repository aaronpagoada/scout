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

function RegisterPage() {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      pattern: user.password,
      errorMessage: "Passwords do not match",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full lg:flex flex-col items-center">
      <Header />
      <div className="w-full flex flex-col justify-center items-center lg:max-w-md lg:w-1/3 lg:border lg:border-gray-300 lg:bg-gray-50">
        <h3 className="text-black text-3xl mb-8 md:mt-8">Sign up</h3>
        <form className="w-5/6 md:w-5/12 lg:w-5/6" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              name={input.name}
              label={input.label}
              type={input.type}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
              value={user[input.name as keyof User]}
              onChange={onChange}
            />
          ))}
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
      <footer className="w-full fixed bottom-0 left-0 text-center mt-8 mb-8 text-gray-300">
        © Scout 2024
      </footer>
    </div>
  );
}

export default RegisterPage;
