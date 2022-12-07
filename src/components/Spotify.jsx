import React from "react";
import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify-container {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .container {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;

const Spotify = () => {
  return (
    <Container>
      <div className="spotify-container">
        <Sidebar />
        <div className="container">
          <Navbar />
          <div className="container-contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify-footer">
        <Footer />
      </div>
    </Container>
  );
};

export default Spotify;
