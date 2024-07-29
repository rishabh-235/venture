import "./App.css";
import { useEffect } from 'react';
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupInv from "./components/SignupInv";
import LoginInv from "./components/LoginInv";
import Explore from "./components/Explore/ExploreChild.js";
import LandingPage from "./components/LandingPage";
import Founders from "./components/Explore/Founders";
import TopInvestors from "./components/Explore/TopInvestors.js";
import StartupRegistration from "./components/RaiseMoney/StartupRegistration.js";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./components/UserProfile/Profile.js";
import ProfileForm from "./components/UserProfile/ProfileForm.js";
import ProfileHome from "./components/UserProfile/ProfileHome.js";
import RegisterInvestor from "./components/investor/RegisterInvestor.js";
import checkAuthStatus from "./redux/checkAuth.js";
import PortMainPage from "./components/Portfolio/PortMainPage.js";
import PortfolioDetails from "./components/Portfolio/PortfolioDetails.js";
import FollowerPageNavigator from "./components/Portfolio/FollowerPageNavigator.js";
import Followingpage from "./components/Portfolio/Followingpage.js";
import FollowersPage from "./components/Portfolio/FollowersPage.js";
import WishlistPage from "./components/Portfolio/WishlistPage.js";
import CashPage from "./components/Portfolio/CashPage.js";
import TaxDocPage from "./components/Portfolio/TaxDocPage.js";
import SettingPage from "./components/Portfolio/SettingPage.js";
import LoginSecurityPage from "./components/Portfolio/LoginSecurityPage.js";
import InvestorInfo from "./components/Portfolio/InvestorInfo.js";
import InvestorLimits from "./components/Portfolio/InvestorLimits.js";
import BankCard from "./components/Portfolio/BankCard.js";
import PublicProfile from "./components/Portfolio/PublicProfile.js";
import Status from "./components/Portfolio/Status.js";
import PitchPage from "./components/StartupContaint/PitchPage.js";
import Overview from "./components/StartupContaint/Overview.js";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);

  let user = {
    fullname: "",
  };

  
  useEffect(() => {
    checkAuthStatus(dispatch);
  }, [dispatch]);
  
  if (userData) {
    user = userData.fullname;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<LandingPage />} />
            <Route path="home" element={<LandingPage />} />
            <Route path="signup" element={<SignupInv />} />
            <Route path="login" element={<LoginInv />} />
            <Route path="" element={<Explore />}>
              <Route path="founder" element={<Founders />} />
              <Route path="topinvestor" element={<TopInvestors />} />
            </Route>
            <Route path="register_startup" element={<StartupRegistration />} />
            <Route path={`/profile/${user || ''}`} element={<ProfileHome />}>
              <Route path="" element={<Profile />} />
              <Route path="editprofile" element={<ProfileForm />} />
              <Route path="registerinvestor" element={<RegisterInvestor />} />
            </Route>
            <Route path="" element={<PortMainPage />}>
              <Route path="portfolio" element={<PortfolioDetails />} />
              <Route path="follower" element={<FollowerPageNavigator />}>
                <Route path="" element={<FollowersPage/>}/>
                <Route path="following" element={<Followingpage />} />
              </Route>
              <Route path="watch" element={<WishlistPage />} />
              <Route path="cash" element={<CashPage />} />
              <Route path="docs" element={<TaxDocPage />} />
              <Route path="settings" element={<SettingPage />}>
                <Route path="login&security" element={<LoginSecurityPage />} />
                <Route path="investor_information" element={<InvestorInfo />} />
                <Route path="investor_limits" element={<InvestorLimits />} />
                <Route path="banks_and_cards" element={<BankCard />} />
                <Route path="public_profile" element={<PublicProfile />} />
                <Route path="vip" element={<Status />}/>
                <Route/>
              </Route>
            </Route>
            <Route path="pitch" element={<PitchPage />} >
              <Route path="" element={<Overview/>} />
              <Route/>
              <Route/>
              <Route/>
              <Route/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
