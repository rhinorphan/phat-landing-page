import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Community from './components/Community';
import Tokens from './components/Tokens';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
        <Header />
        <div className="app__body">
          <Landing />
          <div>
            <Community />
            <Tokens />
            <About />
            <Contact />
          </div>
        </div> 
        <Footer />
    </div>
  );
}

export default App;
