import logo from './logo.svg';
import './App.css';
import Headerwithnav from './pages/headerwithnav';
import Footer from './pages/footer';
import Homepagesite from './pages/homepage';

function App() {
  return (
    <div className="App">
    <Headerwithnav />
    <Homepagesite />
   <Footer/>
    </div>
  );
}

export default App;
