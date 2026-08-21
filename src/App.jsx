import "./App.css";
import { useEffect, useState } from "react";
import { ROUTES } from "./constants/constants";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupInv from "./components/SignupInv";
import LoginInv from "./components/LoginInv";
import Explore from "./pages/Explore/ExploreChild";
import LandingPage from "./components/HeroPage/LandingPage";
import Founders from "./pages/Explore/Founders";
import TopInvestors from "./components/Explore/TopInvestors";
import StartupRegistration from "./pages/RaiseMoney/StartupRegistration";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./pages/UserProfile/Profile";
import ProfileHome from "./pages/UserProfile/ProfileHome";
import RegisterInvestor from "./pages/Auth/RegisterInvestor";
import { checkAuthStatus } from "./redux/slice/authSlice";
import PortMainPage from "./pages/Portfolio/PortMainPage";
import PortfolioDetails from "./components/Portfolio/PortfolioDetails";
import FollowerPageNavigator from "./pages/Portfolio/FollowerPageNavigator";
import Followingpage from "./pages/Portfolio/Followingpage";
import FollowersPage from "./pages/Portfolio/FollowersPage";
import WishlistPage from "./pages/Portfolio/WishlistPage";
import CashPage from "./pages/Portfolio/CashPage";
import TaxDocPage from "./pages/Portfolio/TaxDocPage";
import SettingPage from "./pages/Portfolio/SettingPage";
import LoginSecurityPage from "./pages/Portfolio/LoginSecurityPage";
import InvestorInfo from "./components/Portfolio/InvestorInfo";
import InvestorLimits from "./components/Portfolio/InvestorLimits";
import BankCard from "./components/Portfolio/BankCard";
import PublicProfile from "./components/Portfolio/PublicProfile";
import Status from "./components/Portfolio/Status";
import PitchPage from "./components/StartupContaint/PitchPage";
import Overview from "./components/StartupContaint/Overview";
import Page404 from "./pages/Error/Page404";
import RaiseMoneyOverview from "./pages/RaiseMoney/RaiseMoneyOverview";
import PitchEdit from "./pages/RaiseMoney/PitchEdit";
import Home from "./pages/RaiseMoney/Home.RaiseMoney";
import Basic from "./components/RaiseMoney/PitchEditor/Basic";
import Highlights from "./components/RaiseMoney/PitchEditor/Highlights";
import Team from "./components/RaiseMoney/PitchEditor/Team";
import FeaturedInvestor from "./components/RaiseMoney/PitchEditor/FeaturedInvestor";
import Contract from "./components/RaiseMoney/PitchEditor/Contract";
import Perks from "./components/RaiseMoney/PitchEditor/Perks";
import FundingGoals from "./components/RaiseMoney/PitchEditor/FundingGoals";
import Discoverablility from "./components/RaiseMoney/PitchEditor/Discoverablility";
import Extras from "./components/RaiseMoney/PitchEditor/Extras";
import Pitch from "./components/RaiseMoney/PitchEditor/Pitch";

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
        await dispatch(checkAuthStatus());
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
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />}>
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
              <Route path={ROUTES.SETTINGS} element={<SettingPage />}>
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
          <Route path={ROUTES.RAISE_MONEY} element={<Home />}>
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
