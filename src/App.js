import logo from './logo.svg';
import './App.css';
import Signup from './pages/Sign-up/Signup';
import { Route,Routes} from "react-router-dom";
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home';

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
   </>
  );
}

export default App;
