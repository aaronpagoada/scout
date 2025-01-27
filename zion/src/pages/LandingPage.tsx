import Header from '../components/Header';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Header />
      <div className='text-black'>
        <h2>Getting outside begins with <strong>Scout</strong></h2>
        <div className='text-white'>
          <Link to="/register"><button>Register</button></Link>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
