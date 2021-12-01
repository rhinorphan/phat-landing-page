import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Community from './components/Community';

function App() {
  return (
    <div className="app no-scrollbar">
        <Header />
        <div className="app__body">
          <Landing />
          <Community />
          <Contact />
        </div> 
    </div>
  );
}

export default App;
