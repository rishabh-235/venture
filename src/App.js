import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Display from './components/Display';
import StartupDisplay from './components/StartupDisplay';
import InvestorDisplay from './components/InvestorDisplay';
import InvestingProfile from './components/InvestingProfile';
import WhyToInvest from './components/WhyToInvest';
import NewToInvesting from './components/NewToInvesting';
import FAQPage from './components/FAQPage';
import ReadyToFunding from './components/ReadyToFunding';
import FeedbackDisplay from './components/FeedbackDisplay';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage/>
      <Display/>
      <StartupDisplay />
      <InvestorDisplay/>
      <InvestingProfile/>
      <WhyToInvest/>
      <NewToInvesting/>
      <FAQPage/>
      <ReadyToFunding/>
      <FeedbackDisplay/>
      <Footer/>
    </div>
  );
}

export default App;
