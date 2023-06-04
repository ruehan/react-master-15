// Image 404 Error 해결 필요

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import defaultImg from "../imagenotfound.png"

const CharacterDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 10fr;
    justify-items: center;
    align-items: first baseline;
    font-family: 'Cherry Bomb One', cursive;
    font-size: 23px;
    font-weight: 400;
    background-color: whitesmoke;
    height: 80vh;
    overflow: hidden;
`

const CharacterInfo = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    justify-items: center;
`

const CharacterImg = styled.img`
    border-radius: 100px;
    width: 200px;
    height: 200px;
    border: 1px solid black;
`

const Films = styled.div`
    font-size: 30px;
`

const FilmList = styled.ul`
    font-size: 20px;
    margin-top: 20px;
`

interface CharacterDetailData {
    id: number;
    name: string;
    imageUrl: string;
    films: string[];
}

const CharacterDetailPage: React.FC<CharacterDetailData> = ({id, name, imageUrl, films}) => {

    const urlExists = (url:string) => {
        const http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        if(http.status !== 404 ) return true 
    }

    console.log(films)

    return (
        <CharacterDiv>
            <div></div>
            <CharacterInfo>
                {urlExists(imageUrl) === true ? <CharacterImg src={imageUrl} alt={name}/> : <CharacterImg src={defaultImg} alt={name}/>}
                <h3>{name}</h3>
                <Films>Films</Films>
                <ul>
                    {
                        films && films.map(film => (
                            <FilmList key={film}>{film}</FilmList>
                        ))
                    }
                </ul>
            </CharacterInfo>
        </CharacterDiv>
    )
}

export default CharacterDetailPage;