import React, { useState } from "react"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3 className="text-black text-3xl mb-8">Log in</h3>
      <form action="">
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="email">Email</label>
          <input className="border-2 border-gray-300" id="email "type="text" />
          <div></div>
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="password">Password</label>
          <input className="border-2 border-gray-300" id="password" type="password" />
          <div></div>
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>

  )

}

export default LoginPage
