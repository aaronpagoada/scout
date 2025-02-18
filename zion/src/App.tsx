import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PlanPage from './pages/PlanPage';
import TripPage from './pages/TripPage';
import TripsPage from './pages/TripsPage';
import RegisterPage from './pages/RegisterPage';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import './App.css';
import UserContextProvider from './context/userContext';

axios.defaults.baseURL = "http://localhost:8000/api/auth";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/trips' element={<TripsPage />} />
          <Route path='/trips/:id' element={<TripPage />} />
          <Route path='/trips/plan' element={<PlanPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
