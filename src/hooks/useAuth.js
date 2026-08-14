import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkAuthStatus,
  logoutUserThunk,
  login,
} from "../redux/slice/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userData } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          await dispatch(checkAuthStatus());
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("token");
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, [dispatch]);

  const handleLogin = (user, token) => {
    if (token) {
      localStorage.setItem("token", token);
    }
    dispatch(login(user));
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk());
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
