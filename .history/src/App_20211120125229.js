import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Community from './components/Community';
import Tokens from './components/Tokens';
import About from './components/About';
import Footer from './components/Footer';
import Game from './components/Game';

function App() {
  return (
    <div className="app">
        <Header />
        <div className="app__body">
          <Landing />
          <Community />
          <Tokens />
          <About />
          <Contact />
        </div> 
        <Footer />
    </div>
  );
}

export default App;