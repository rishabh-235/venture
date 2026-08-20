import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1";

const initialState = {
  status: false,
  userData: null,
  loading: false,
  error: null,
};

export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/login`,
        formData,
        { withCredentials: true },
      );

      if (response.data?.massage === "User Logged In successfully") {
        return response.data.data.loggedInUser;
      }

      return rejectWithValue(
        response.data?.message || "Login failed. Please try again.",
      );
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed. Please try again.",
      );
    }
  },
);

export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/register`,
        formData,
        { withCredentials: true },
      );

      if (response.data?.data?.loggedInUser) {
        return response.data.data.loggedInUser;
      }

      return rejectWithValue(
        response.data?.message || "Registration failed. Please try again.",
      );
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get(`${API_BASE_URL}/user/logout`, { withCredentials: true });
      return true;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Logout failed. Please try again.",
      );
    }
  },
);

export const checkAuthStatus = createAsyncThunk(
  "auth/checkAuthStatus",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/verifyToken`, {
        withCredentials: true,
      });

      if (response.status === 200 && response.data?.data) {
        return response.data.data;
      }

      return rejectWithValue("Authentication failed");
    } catch (error) {
      if (error.response?.status === 401) {
        try {
          const refreshResponse = await axios.post(
            `${API_BASE_URL}/user/refreshToken`,
            {},
            { withCredentials: true },
          );

          if (
            refreshResponse.status === 200 &&
            refreshResponse.data?.data?.user
          ) {
            return refreshResponse.data.data.user;
          }
        } catch (refreshError) {
          console.error(
            "Token refresh failed:",
            refreshError.response?.data || refreshError.message,
          );
        }
      }

      dispatch(logout());
      return rejectWithValue(
        error.response?.data?.message || "Authentication failed",
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.error = null;
      state.loading = false;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      state.loading = false;
      state.error = null;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = true;
        state.userData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.status = false;
        state.userData = null;
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.status = true;
        state.userData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.status = false;
        state.userData = null;
        state.loading = false;
        state.error = action.payload || "Registration failed";
      })
      .addCase(logoutUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.status = false;
        state.userData = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Logout failed";
      })
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.status = true;
        state.userData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.status = false;
        state.userData = null;
        state.loading = false;
        state.error = action.payload || "Authentication failed";
      });
  },
});

export const { login, logout, clearAuthError } = authSlice.actions;

export default authSlice.reducer;
