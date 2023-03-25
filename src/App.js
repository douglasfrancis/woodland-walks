import './App.css';
import Navbar from './components/Navbar';
import cloud from './cloud.jpeg'
import About from './components/About';
import Prices from './components/Prices';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import logo from './images/woodland-logo-colour.png'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <header>
      <Navbar />

      </header>
      <main>
        <div id='head-img'>
          <img  id='nav-logo' src={logo} alt='logo' />

        </div>

        

        <About />
        

        <Prices />
        

        <Gallery />
        

        <Contact />
        

      </main>
      <Footer />
    </div>
  );
}

export default App;
