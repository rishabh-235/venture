import axios from "axios";
import { login, logout } from "./slice/authSlice";

const API_BASE_URL = "http://localhost:8000/api/v1";

const checkAuthStatus = async (dispatch) => {
  try {
    // First, try to verify the current token
    const response = await axios.get(`${API_BASE_URL}/user/verifyToken`, {
      withCredentials: true,
    });

    if (response.status === 200 && response.data?.data) {
      dispatch(login(response.data.data));
      return true;
    }
  } catch (error) {
    console.log("Token verification failed:", error.response?.status);

    // If token verification fails with 401, try to refresh
    if (error.response?.status === 401) {
      try {
        console.log("Attempting to refresh token...");
        const refreshResponse = await axios.post(
          `${API_BASE_URL}/user/refreshToken`,
          {},
          {
            withCredentials: true,
          }
        );

        if (
          refreshResponse.status === 200 &&
          refreshResponse.data?.data?.user
        ) {
          console.log("Token refreshed successfully");
          dispatch(login(refreshResponse.data.data.user));
          return true;
        }
      } catch (refreshError) {
        console.error(
          "Token refresh failed:",
          refreshError.response?.data || refreshError.message
        );
      }
    } else if (error.response?.status === 400) {
      // Handle 400 errors specifically if needed
      console.log("Bad request during token verification");
    }

    // If all fails, logout the user
    console.log("Authentication failed, logging out user");
    dispatch(logout());
    return false;
  }
};

export default checkAuthStatus;
