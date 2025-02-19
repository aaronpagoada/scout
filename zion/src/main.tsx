import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserContextProvider } from './context/userContext.tsx'

createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
)
