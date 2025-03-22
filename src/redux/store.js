import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import pitchDataSlice from './slice/pitchDataSlice';

const store = configureStore({
    reducer:{
        auth : authSlice,
        pitchData: pitchDataSlice
    }
});

export default store;