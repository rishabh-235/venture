import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { API_ENDPOINTS } from "../../constants/constants";

const initialState = {
  topInvestors: [],
  loading: false,
  error: null,
};

export const fetchTopInvestors = createAsyncThunk(
  "investor/fetchTopInvestors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ENDPOINTS.INVESTOR.TOP_INVESTORS);
      return response.data?.data || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch top investors",
      );
    }
  },
);

export const registerInvestorThunk = createAsyncThunk(
  "investor/registerInvestor",
  async (investorData, { rejectWithValue }) => {
    try {
      const response = await api.post(
        API_ENDPOINTS.INVESTOR.REGISTER,
        investorData,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Investor registration failed",
      );
    }
  },
);

const investorSlice = createSlice({
  name: "investor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopInvestors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopInvestors.fulfilled, (state, action) => {
        state.topInvestors = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTopInvestors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch top investors";
      })
      .addCase(registerInvestorThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerInvestorThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        return { ...state, lastRegisteredInvestor: action.payload };
      })
      .addCase(registerInvestorThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Investor registration failed";
      });
  },
});

export default investorSlice.reducer;
