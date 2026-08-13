import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basic: { textData: {} },
    contract: { textData: {} },
    discoverability: { textData: {} },
    extra: { textData: {} },
    featuredInvestor: { textData: {} },
    fundingGoals: { textData: {} },
    highlights: { textData: {} },
    perks: { textData: {} },
    pitch: { textData: {} },
    teams: { textData: {} },
    loading: false,
    error: null,
    startupId: null,
    isDataLoaded: false
};

const pitchDataSlice = createSlice({
    name: "pitchData",
    initialState,
    reducers: {
        updatePitchData: (state, action) => {
            const { pitchName, data } = action.payload;
            state[pitchName] = {
                ...state[pitchName],
                ...data
            };
        },
        loadPitchData: (state, action) => {
            const pitchData = action.payload;
            Object.keys(pitchData).forEach(key => {
                if (state.hasOwnProperty(key) && key !== 'loading' && key !== 'error' && key !== 'startupId' && key !== 'isDataLoaded') {
                    state[key] = pitchData[key];
                }
            });
            state.isDataLoaded = true;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setStartupId: (state, action) => {
            state.startupId = action.payload;
        },
        resetPitchData: (state) => {
            return { ...initialState };
        },
        clearError: (state) => {
            state.error = null;
        }
    }
});

export const { 
    updatePitchData, 
    loadPitchData, 
    setLoading, 
    setError, 
    setStartupId, 
    resetPitchData,
    clearError 
} = pitchDataSlice.actions;

export default pitchDataSlice.reducer;
