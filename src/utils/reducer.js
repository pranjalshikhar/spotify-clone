import { reducerCases } from "./actions";

export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  selectedPlaylistId: "6cBaV4wSRGMwcwSnrlF02C",
};

const reducer = (state = initialState, action) => {
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
    case reducerCases.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducerCases.SET_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    case reducerCases.SET_PLAYING:
      return {
        ...state,
        currentPlaying: action.currentPlaying,
      };
    case reducerCases.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      };
    case reducerCases.SET_PLAYLIST_ID:
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
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
