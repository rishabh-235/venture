import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINTS } from "../../constants/constants";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1";

const initialState = {
  followers: [],
  following: [],
  loading: false,
  error: null,
};

export const fetchFollowers = createAsyncThunk(
  "user/fetchFollowers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}${API_ENDPOINTS.USER.GET_FOLLOWERS}`,
        { withCredentials: true },
      );
      return response.data?.data || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch followers",
      );
    }
  },
);

export const fetchFollowing = createAsyncThunk(
  "user/fetchFollowing",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}${API_ENDPOINTS.USER.GET_FOLLOWING}`,
        { withCredentials: true },
      );
      return response.data?.data || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch following",
      );
    }
  },
);

export const toggleFollowUser = createAsyncThunk(
  "user/toggleFollowUser",
  async ({ userId, isFollowing }, { rejectWithValue }) => {
    try {
      const endpoint = isFollowing
        ? API_ENDPOINTS.USER.UNFOLLOW
        : API_ENDPOINTS.USER.FOLLOW;
      const response = await axios.post(
        `${API_BASE_URL}${endpoint}`,
        { user_id: userId },
        { withCredentials: true },
      );
      return { userId, isFollowing: !isFollowing, response: response.data };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Follow action failed",
      );
    }
  },
);

export const updateInvestorProfile = createAsyncThunk(
  "user/updateInvestorProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}${API_ENDPOINTS.INVESTOR.UPDATE_INVESTOR}`,
        payload,
        { withCredentials: true },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Investor update failed",
      );
    }
  },
);

export const updatePublicProfile = createAsyncThunk(
  "user/updatePublicProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}${API_ENDPOINTS.USER.EDIT_PROFILE}`,
        payload,
        { withCredentials: true },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Profile update failed",
      );
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFollowers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFollowers.fulfilled, (state, action) => {
        state.followers = action.payload;
        state.loading = false;
      })
      .addCase(fetchFollowers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch followers";
      })
      .addCase(fetchFollowing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFollowing.fulfilled, (state, action) => {
        state.following = action.payload;
        state.loading = false;
      })
      .addCase(fetchFollowing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch following";
      })
      .addCase(toggleFollowUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (action.payload?.userId) {
          state.following = state.following.filter(
            (user) => user._id !== action.payload.userId,
          );
        }
      })
      .addCase(toggleFollowUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Follow action failed";
      });
  },
});

export const { clearUserError } = userSlice.actions;

export default userSlice.reducer;
