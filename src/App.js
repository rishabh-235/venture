import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupInv from "./components/SignupInv";
import LoginInv from "./components/LoginInv";
import Explore from "./pages/Explore/ExploreChild.js";
import LandingPage from "./components/HeroPage/LandingPage.js";
import Founders from "./pages/Explore/Founders";
import TopInvestors from "./components/Explore/TopInvestors.js";
import StartupRegistration from "./pages/RaiseMoney/StartupRegistration.js";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./pages/UserProfile/Profile.js";
import ProfileHome from "./pages/UserProfile/ProfileHome.js";
import RegisterInvestor from "./pages/Auth/RegisterInvestor.js";
import checkAuthStatus from "./redux/checkAuth.js";
import PortMainPage from "./pages/Portfolio/PortMainPage.js";
import PortfolioDetails from "./components/Portfolio/PortfolioDetails.js";
import FollowerPageNavigator from "./pages/Portfolio/FollowerPageNavigator.js";
import Followingpage from "./pages/Portfolio/Followingpage.js";
import FollowersPage from "./pages/Portfolio/FollowersPage.js";
import WishlistPage from "./pages/Portfolio/WishlistPage.js";
import CashPage from "./pages/Portfolio/CashPage.js";
import TaxDocPage from "./pages/Portfolio/TaxDocPage.js";
import SettingPage from "./pages/Portfolio/SettingPage.js";
import LoginSecurityPage from "./pages/Portfolio/LoginSecurityPage.js";
import InvestorInfo from "./components/Portfolio/InvestorInfo.js";
import InvestorLimits from "./components/Portfolio/InvestorLimits.js";
import BankCard from "./components/Portfolio/BankCard.js";
import PublicProfile from "./components/Portfolio/PublicProfile.js";
import Status from "./components/Portfolio/Status.js";
import PitchPage from "./components/StartupContaint/PitchPage.js";
import Overview from "./components/StartupContaint/Overview.js";
import Page404 from "./pages/Error/Page404.js";
import RaiseMoneyOverview from "./pages/RaiseMoney/RaiseMoneyOverview.js";
import PitchEdit from "./pages/RaiseMoney/PitchEdit.js";
import Home from "./pages/RaiseMoney/Home.RaiseMoney.js";
import Basic from "./components/RaiseMoney/PitchEditor/Basic.js";
import Highlights from "./components/RaiseMoney/PitchEditor/Highlights.js";
import Team from "./components/RaiseMoney/PitchEditor/Team.js";
import FeaturedInvestor from "./components/RaiseMoney/PitchEditor/FeaturedInvestor.js";
import Contract from "./components/RaiseMoney/PitchEditor/Contract.js";
import Perks from "./components/RaiseMoney/PitchEditor/Perks.js";
import FundingGoals from "./components/RaiseMoney/PitchEditor/FundingGoals.js";
import Discoverablility from "./components/RaiseMoney/PitchEditor/Discoverablility.js";
import Extras from "./components/RaiseMoney/PitchEditor/Extras.js";
import Pitch from "./components/RaiseMoney/PitchEditor/Pitch.js";

// Loading component
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "18px",
    }}
  >
    <div>Loading...</div>
  </div>
);

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  // Safely get user name with fallback
  const getUserName = () => {
    if (userData && typeof userData === "object") {
      return userData.firstname || userData.name || "";
    }
    return "";
  };

  const user = getUserName();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await checkAuthStatus(dispatch);
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setIsAuthChecking(false);
      }
    };

    initializeAuth();
  }, [dispatch]);

  // Show loading spinner while checking authentication
  if (isAuthChecking) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<LandingPage />} />
            <Route path="home" element={<LandingPage />} />
            <Route path="signup" element={<SignupInv />} />
            <Route path="login" element={<LoginInv />} />
            <Route path="" element={<Explore />}>
              <Route path="founder" element={<Founders />} />
              <Route path="topinvestor" element={<TopInvestors />} />
            </Route>
            <Route
              path={`/profile/${user || "guest"}`}
              element={<ProfileHome />}
            >
              <Route index element={<Profile />} />
              <Route path="registerinvestor" element={<RegisterInvestor />} />
            </Route>
            <Route path="" element={<PortMainPage />}>
              <Route path="portfolio" element={<PortfolioDetails />} />
              <Route path="" element={<FollowerPageNavigator />}>
                <Route path="follower" element={<FollowersPage />} />
                <Route path="following" element={<Followingpage />} />
              </Route>
              <Route path="watch" element={<WishlistPage />} />
              <Route path="cash" element={<CashPage />} />
              <Route path="docs" element={<TaxDocPage />} />
              <Route path="/settings" element={<SettingPage />}>
                <Route index element={<LoginSecurityPage />} />
                <Route path="investor_information" element={<InvestorInfo />} />
                <Route path="investor_limits" element={<InvestorLimits />} />
                <Route path="banks_and_cards" element={<BankCard />} />
                <Route path="public_profile" element={<PublicProfile />} />
                <Route path="vip" element={<Status />} />
              </Route>
            </Route>
            <Route path="pitch/:id" element={<PitchPage />}>
              <Route index element={<Overview />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="/register_startup" element={<Home />}>
            <Route path="" element={<StartupRegistration />} />
            <Route path="overview" element={<RaiseMoneyOverview />} />
            <Route path="editpitch" element={<PitchEdit />}>
              <Route path="basics" element={<Basic />} />
              <Route path="highlights" element={<Highlights />} />
              <Route path="team" element={<Team />} />
              <Route path="pitch_editor" element={<Pitch />} />
              <Route path="featured_investor" element={<FeaturedInvestor />} />
              <Route path="contract" element={<Contract />} />
              <Route path="perks" element={<Perks />} />
              <Route path="funding_goal" element={<FundingGoals />} />
              <Route path="discoverability" element={<Discoverablility />} />
              <Route path="extra" element={<Extras />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
