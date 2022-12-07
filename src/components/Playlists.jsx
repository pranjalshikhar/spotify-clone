import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { reducerCases } from "../utils/actions";
import { setToken, setPlaylists } from "../utils/reducer";
import { useStateProvider } from "../utils/StateProvider";

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 50vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.1rem;
      border-radius: 50%;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: white;
      }
    }
  }
`;

const Playlists = () => {
  // const dispatch = useDispatch();
  // const hash = window.location.hash;
  // var token;
  // if (hash) {
  //   token = hash.substring(1).split("&")[0].split("=")[1];
  // }

  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistsData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      // console.table(items);

      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      // console.log(playlists);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
      // dispatch(setToken(token));
      // dispatch(setPlaylists(playlists));
    };
    getPlaylistsData();
  }, [token, dispatch]);

  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </Container>
  );
};

export default Playlists;
