import { reducerCases } from "./actions";

export const initialState = {
  token: null,
  playlists: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case reducerCases.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const initialState = {
//   token: null,
//   playlists: [],
// };

// const sptifySlice = createSlice({
//   name: "spotify",
//   initialState,
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.token;
//     },
//     setPlaylists: (state, action) => {
//       state.action = action.playlists;
//     },
//   },
// });

// export default sptifySlice.reducer;
// export const { setToken, setPlaylists } = sptifySlice.actions;
