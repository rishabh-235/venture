import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basic: {},
    contract: {},
    discoverability: {},
    extra: {},
    featuredInvestor: {},
    fundingGoals: {},
    highlights: {},
    perks: {},
    pitch: {},
    teams: {},
};

const pitchDataSlice = createSlice({
    name: "pitchData",
    initialState,
    reducers: {
        updatePitchData: (state, action) => {
            const { pitchName, data } = action.payload;
            state[pitchName] = data;
        }
    }
});

export const { updatePitchData } = pitchDataSlice.actions;
export default pitchDataSlice.reducer;
