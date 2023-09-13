import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        activeTab: "dashboard"
    },
    reducers: {

        updateActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { updateActiveTab } = dashboardSlice.actions

export default dashboardSlice.reducer