// userReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerData: [],
};

const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addResponses: (state, action) => {
      console.log("payload", action.payload);
      console.log("state.responses::", state.playerData);
      if (state.playerData != null) {
        state.playerData.push(action.payload);
      }
    },
    getResponses: (state, action) => {
      state.playerData = action.payload;
    },
  },
});

// Export the generated reducer and action creators
export const {
  updateSport,
  updateUsername,
  updateDate,
  updateMembers,
  addResponses,
  getResponses,
} = counterSlice.actions;

export default counterSlice.reducer;
