import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
// import { reducerCases } from "./utils/actions";
import { setToken } from "./utils/reducer";
// import { useStateProvider } from "./utils/StateProvider";

const App = () => {
  // const [{ token }, dispatch] = useStateProvider();
  // const token = useSelector((state) => state.spotify.token);
  const dispatch = useDispatch();
  const hash = window.location.hash;
  var token;
  if (hash) {
    token = hash.substring(1).split("&")[0].split("=")[1];
  }
  dispatch(setToken(token));
  // useEffect(() => {
  // const hash = window.location.hash;
  // console.table(hash);

  // if (hash) {
  // token = hash.substring(1).split("&")[0].split("=")[1];
  // console.table(token);
  // dispatch({
  //   type: reducerCases.SET_TOKEN,
  //   token,
  // });
  //   dispatch(setToken(token));
  // }
  // }, [token, dispatch]);

  return <div>{token ? <Spotify /> : <Login />}</div>;
};

export default App;
