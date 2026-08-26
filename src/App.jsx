import "./App.css";
import { useEffect, useState, lazy, Suspense } from "react";
import { ROUTES } from "./constants/constants";
import HomePage from "./pages/Home/HomePage";
import LandingPage from "./components/HeroPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthStatus } from "./redux/slice/authSlice";

// Everything below is only needed once a visitor actually navigates to it,
// so it's split into its own chunk instead of the main bundle.
const SignupInv = lazy(() => import("./components/SignupInv"));
const LoginInv = lazy(() => import("./components/LoginInv"));
const Explore = lazy(() => import("./pages/Explore/ExploreChild"));
const Founders = lazy(() => import("./pages/Explore/Founders"));
const TopInvestors = lazy(() => import("./components/Explore/TopInvestors"));
const StartupRegistration = lazy(() => import("./pages/RaiseMoney/StartupRegistration"));
const Profile = lazy(() => import("./pages/UserProfile/Profile"));
const ProfileHome = lazy(() => import("./pages/UserProfile/ProfileHome"));
const RegisterInvestor = lazy(() => import("./pages/Auth/RegisterInvestor"));
const PortMainPage = lazy(() => import("./pages/Portfolio/PortMainPage"));
const PortfolioDetails = lazy(() => import("./components/Portfolio/PortfolioDetails"));
const FollowerPageNavigator = lazy(() => import("./pages/Portfolio/FollowerPageNavigator"));
const Followingpage = lazy(() => import("./pages/Portfolio/Followingpage"));
const FollowersPage = lazy(() => import("./pages/Portfolio/FollowersPage"));
const WishlistPage = lazy(() => import("./pages/Portfolio/WishlistPage"));
const CashPage = lazy(() => import("./pages/Portfolio/CashPage"));
const TaxDocPage = lazy(() => import("./pages/Portfolio/TaxDocPage"));
const SettingPage = lazy(() => import("./pages/Portfolio/SettingPage"));
const LoginSecurityPage = lazy(() => import("./pages/Portfolio/LoginSecurityPage"));
const InvestorInfo = lazy(() => import("./components/Portfolio/InvestorInfo"));
const InvestorLimits = lazy(() => import("./components/Portfolio/InvestorLimits"));
const BankCard = lazy(() => import("./components/Portfolio/BankCard"));
const PublicProfile = lazy(() => import("./components/Portfolio/PublicProfile"));
const Status = lazy(() => import("./components/Portfolio/Status"));
const PitchPage = lazy(() => import("./components/StartupContaint/PitchPage"));
const Overview = lazy(() => import("./components/StartupContaint/Overview"));
const Page404 = lazy(() => import("./pages/Error/Page404"));
const RaiseMoneyOverview = lazy(() => import("./pages/RaiseMoney/RaiseMoneyOverview"));
const PitchEdit = lazy(() => import("./pages/RaiseMoney/PitchEdit"));
const Home = lazy(() => import("./pages/RaiseMoney/Home.RaiseMoney"));
const Basic = lazy(() => import("./components/RaiseMoney/PitchEditor/Basic"));
const Highlights = lazy(() => import("./components/RaiseMoney/PitchEditor/Highlights"));
const Team = lazy(() => import("./components/RaiseMoney/PitchEditor/Team"));
const FeaturedInvestor = lazy(() => import("./components/RaiseMoney/PitchEditor/FeaturedInvestor"));
const Contract = lazy(() => import("./components/RaiseMoney/PitchEditor/Contract"));
const Perks = lazy(() => import("./components/RaiseMoney/PitchEditor/Perks"));
const FundingGoals = lazy(() => import("./components/RaiseMoney/PitchEditor/FundingGoals"));
const Discoverablility = lazy(() => import("./components/RaiseMoney/PitchEditor/Discoverablility"));
const Extras = lazy(() => import("./components/RaiseMoney/PitchEditor/Extras"));
const Pitch = lazy(() => import("./components/RaiseMoney/PitchEditor/Pitch"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-white">
    <div className="relative h-14 w-14">
      <div className="absolute inset-0 rounded-full border-[3px] border-blue-100"></div>
      <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-purple-500 motion-safe:animate-spin"></div>
    </div>
    <div className="flex items-center gap-2 motion-safe:animate-pulse">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
      <span className="text-sm font-medium tracking-wide text-gray-400">
        Loading VentureList
      </span>
    </div>
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
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
