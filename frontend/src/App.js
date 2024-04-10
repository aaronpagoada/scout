import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trips from './pages/Trips';
import Trip from './pages/Trip';
import Plan from './pages/Plan';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="bg-yellow-50 h-screen">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/trips' element={<Trips />} />
            <Route path='/trips/:id' element={<Trip />} />
            <Route path='/plan' element={<Plan />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
