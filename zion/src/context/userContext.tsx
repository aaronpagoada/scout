import axios from "axios"
import { createContext, useState, useEffect } from "react"

const UserContext = createContext({})

function UserContextProvider({ children }: any) {
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
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
