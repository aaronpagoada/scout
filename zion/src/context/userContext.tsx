import axios from "axios"
import { createContext, useState, useEffect } from "react"

export const UserContext = createContext({})

export function UserContextProvider({ children }: any) {
  const [user, setUser] = useState({})
  useEffect(() => {
    if (!user) {
      axios.get("/profile")
        .then(({ data }) => {
          setUser(data)
        })
    }
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
