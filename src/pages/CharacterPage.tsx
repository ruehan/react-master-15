// Image 404 Error 해결 필요

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultImg from "../imagenotfound.png";
import Modal from "../components/Modal";

const CharacterDiv = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  justify-items: center;
  align-items: center;
  font-family: "Cherry Bomb One", cursive;
  font-size: 23px;
  font-weight: 400;
  margin-top: 10px;

  &:hover {
    background-color: black;
    color: white;
    border-radius: 20px;
  }
`;

const CharacterImg = styled.img`
  border-radius: 100px;
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

interface CharacterData {
  id: number;
  name: string;
  imageUrl: string;
}

const CharacterPage: React.FC<CharacterData> = ({ id, name, imageUrl }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const urlExists = (url: string) => {
    const http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    if (http.status !== 404) return true;
  };

  return (
    <CharacterDiv>
      {/* {urlExists(imageUrl) === true ? (
        <CharacterImg src={imageUrl} alt={name} />
      ) : (
        <CharacterImg src={defaultImg} alt={name} />
      )} */}
      <CharacterImg src={imageUrl} alt={name} />
      <h3 onClick={showModal}>{name}</h3>
      {/* <h3 style={{ color: "white" }}>{id}</h3> */}
      {modalOpen && <Modal setModalOpen={setModalOpen} id={id} />}
    </CharacterDiv>
  );
};

export default CharacterPage;
