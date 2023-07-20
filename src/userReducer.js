// userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  responses: [],
};

const counterSlice = createSlice({
  name: 'user', // Name of the slice
  initialState, // Initial state
  reducers: {
    updateSport: (state, action) => {
      state.sports = action.payload;
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updateDate: (state, action) => {
      state.date = action.payload;
    },
    updateMembers: (state, action) => {
      state.members = action.payload;
    },
    addResponses: (state, action) => {
      state.responses.push(action.payload);
    },
    getResponses: (state, action) => {
      state.responses = action.payload;
    },
  },
});

// Export the generated reducer and action creators
export const { updateSport, updateUsername, updateDate, updateMembers, addResponses, getResponses } = counterSlice.actions;

export default counterSlice.reducer;
