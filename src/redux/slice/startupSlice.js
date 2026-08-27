import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { API_ENDPOINTS } from "../../constants/constants";

const initialState = {
  myStartup: null,
  startupDetail: null,
  topFounders: [],
  registrationStatus: null,
  loading: false,
  error: null,
};

export const registerStartup = createAsyncThunk(
  "startup/registerStartup",
  async (startupData, { rejectWithValue }) => {
    try {
      const response = await api.post(
        API_ENDPOINTS.STARTUP.REGISTER,
        startupData,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Startup registration failed",
      );
    }
  },
);

export const fetchMyStartup = createAsyncThunk(
  "startup/fetchMyStartup",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ENDPOINTS.STARTUP.MY_STARTUP);

      return response.data?.data || null;
    } catch (error) {
      if (error.response?.status === 404) {
        return null;
      }
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch startup data",
      );
    }
  },
);

export const savePitchData = createAsyncThunk(
  "startup/savePitchData",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { pitchData } = getState();
      const response = await api.post(
        API_ENDPOINTS.STARTUP.EDIT_PITCH,
        pitchData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to save pitch data",
      );
    }
  },
);

export const fetchStartupById = createAsyncThunk(
  "startup/fetchStartupById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ENDPOINTS.STARTUP.GET_BY_ID(id));
      return response.data?.data || null;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch startup data",
      );
    }
  },
);

export const fetchTopFounders = createAsyncThunk(
  "startup/fetchTopFounders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ENDPOINTS.STARTUP.TOP_FOUNDERS);
      return response.data?.data || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch top founders",
      );
    }
  },
);

export const createInvestmentOrder = createAsyncThunk(
  "startup/createInvestmentOrder",
  async (amount, { rejectWithValue }) => {
    try {
      const response = await api.post(API_ENDPOINTS.PAYMENT.BUY_SHARES, {
        amount,
      });
      return response.data?.data || null;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Payment order creation failed",
      );
    }
  },
);

export const fetchPaymentKey = createAsyncThunk(
  "startup/fetchPaymentKey",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ENDPOINTS.PAYMENT.GET_KEY);
      return response.data?.data?.key || null;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch payment key",
      );
    }
  },
);

const startupSlice = createSlice({
  name: "startup",
  initialState,
  reducers: {
    clearStartupError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerStartup.fulfilled, (state, action) => {
        state.registrationStatus = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(registerStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Startup registration failed";
      })
      .addCase(fetchMyStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyStartup.fulfilled, (state, action) => {
        state.myStartup = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMyStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch startup data";
      })
      .addCase(savePitchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(savePitchData.fulfilled, (state, action) => {
        state.registrationStatus = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(savePitchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to save pitch data";
      })
      .addCase(fetchStartupById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStartupById.fulfilled, (state, action) => {
        state.startupDetail = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchStartupById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch startup data";
      })
      .addCase(fetchTopFounders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopFounders.fulfilled, (state, action) => {
        state.topFounders = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTopFounders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch top founders";
      })
      .addCase(createInvestmentOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createInvestmentOrder.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createInvestmentOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Payment order creation failed";
      })
      .addCase(fetchPaymentKey.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPaymentKey.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPaymentKey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch payment key";
      });
  },
});

export const { clearStartupError } = startupSlice.actions;

export default startupSlice.reducer;
