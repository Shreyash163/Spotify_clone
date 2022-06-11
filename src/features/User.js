import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { MatchType: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    friendly: (state, action) => {
      state.value = action.payload;
    }

  },
});

export const { friendly } = userSlice.actions;

export default userSlice.reducer;