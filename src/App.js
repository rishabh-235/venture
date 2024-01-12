import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage/>
      <Display/>
    </div>
  );
}

export default App;
