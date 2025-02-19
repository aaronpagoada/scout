import { useEffect } from "react"
import { useUserContext } from "../context/userContext"

function DashboardPage() {
  const { user, getUser } = useUserContext()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="text-black">{`Hi there ${user.username}`}</div>
    </div>
  )
}

export default DashboardPage
