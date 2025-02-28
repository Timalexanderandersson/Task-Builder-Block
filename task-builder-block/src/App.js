
import './App.css';
import Headerwithnav from './pages/headerwithnav';
import Footer from './pages/footer';
import Homepagesite from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrations from './pages/registration';
import Login from './pages/signin';


function App() {
  return (
   
    
    <div className="App">
      <Headerwithnav />
      <Routes>
        <Route path="/" element={<Homepagesite />} />
        <Route path="/register" element={<Registrations />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  
  );
}

export default App;
