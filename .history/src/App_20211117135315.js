import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Landing from './components/Landing';

function App() {
  return (
    <div className="app no-scrollbar">
        <Header />
        <div className="app__body">
          <Landing id="landing"/>
          <Contact id="contact"/>
        </div> 
    </div>
  );
}

export default App;
