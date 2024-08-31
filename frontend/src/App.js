import LoginRegisterBar from './components/LoginRegisterBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trips from './pages/Trips';
import Trip from './pages/Trip';
import Plan from './pages/Plan';
import Login from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <Router>
      <div className="bg-yellow-50 min-h-screen">
        <header>
          <button className="fixed top-0 bg-black text-white z-50" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>
            Switch
          </button>
          {!isLoggedIn ? 
            <Navbar /> :
            <LoginRegisterBar />
          }
        </header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/trips/:id' element={<Trip />} />
          <Route path='/trips/plan' element={<Plan />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
