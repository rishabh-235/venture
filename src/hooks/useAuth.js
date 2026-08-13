import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slice/authSlice";
import { getCurrentUser, logoutUser } from "../utils/api";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userData } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await getCurrentUser();
          dispatch(login(response.data.data));
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("token");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  const handleLogin = (user, token) => {
    if (token) {
      localStorage.setItem("token", token);
    }
    dispatch(login(user));
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("token");
      dispatch(logout());
    }
  };

  return {
    isAuthenticated,
    userData,
    isLoading,
    login: handleLogin,
    logout: handleLogout,
  };
};

export default useAuth;
