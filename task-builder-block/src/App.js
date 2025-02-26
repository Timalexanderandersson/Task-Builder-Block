
import './App.css';
import Headerwithnav from './pages/headerwithnav';
import Footer from './pages/footer';
import Homepagesite from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrations from './pages/registration';

function App() {
  return (
   
    <Router>
    <div className="App">
      <Headerwithnav />
      <Routes>
        <Route path="/" element={<Homepagesite />} />
        <Route path="/register" element={<Registrations />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
