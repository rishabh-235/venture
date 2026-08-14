import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import pitchDataSlice from "./slice/pitchDataSlice";
import investorSlice from "./slice/investorSlice";
import startupSlice from "./slice/startupSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    pitchData: pitchDataSlice,
    investor: investorSlice,
    startup: startupSlice,
    user: userSlice,
  },
});

export default store;
