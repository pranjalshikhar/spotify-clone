// import { reducerCases } from "./actions";

// export const initialState = {
//   token: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case reducerCases.SET_TOKEN:
//       return {
//         ...state,
//         token: action.token,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: null,
};

const sptifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.token;
    },
  },
});

export default sptifySlice.reducer;
export const { setToken } = sptifySlice.actions;
