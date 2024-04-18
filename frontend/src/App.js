import LoginRegisterBar from './components/LoginRegisterBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trips from './pages/Trips';
import Trip from './pages/Trip';
import Plan from './pages/Plan';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <Router>
      <div className="bg-yellow-50 h-screen">
        <header className='flex-col'>
          <button className="bg-black text-white" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>
            Switch
          </button>
          {!isLoggedIn ? 
            <Navbar /> :
            <LoginRegisterBar />
          }
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/trips' element={<Trips />} />
            <Route path='/trips/:id' element={<Trip />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
