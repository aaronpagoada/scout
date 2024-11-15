import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PlanPage from './pages/PlanPage';
import TripPage from './pages/TripPage';
import TripsPage from './pages/TripsPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/trips' element={<TripsPage />} />
        <Route path='/trips/:id' element={<TripPage />} />
        <Route path='/trips/plan' element={<PlanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
