import axios from "axios"
import { createContext, useState, useContext } from "react"

interface User {
  username: string,
  email: string,
  id: string,
  iat?: string
}

interface UserContextValue {
  user: User,
  getUser(): Promise<void>
}

export const UserContext = createContext<UserContextValue | undefined>(undefined)

export function UserContextProvider({ children }: any) {
  const [user, setUser] = useState({ username: "", email: "", id: "" })

  const getUser = async () => {
    axios.get("/profile")
      .then(({ data }) => {
        setUser(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw Error("useUserContext can only be used inside UserContextProvider")
  }

  return context
}
