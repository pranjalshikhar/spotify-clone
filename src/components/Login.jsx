import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #1db954, #191414);
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: #ffffff;
    color: #191414;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

const Login = () => {
  const connectSpotify = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
    const apiUrl = process.env.REACT_APP_API_URL;
    const scope = [process.env.SCOPE];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt="spotify"
      />
      <button onClick={connectSpotify}>Connect Spotify</button>
    </Container>
  );
};

export default Login;
