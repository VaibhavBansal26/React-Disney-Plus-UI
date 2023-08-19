import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import db from '../firebase';

function Detail() {

    const { id } = useParams();

    const [movie, setMovie] = useState()

    useEffect(() => {
        //Grab the movie from the database
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc){
                setMovie(doc.data());
                console.log(doc.data());
            }else{

            }
        })

    },[id]);

    

    return (
        <Container>
            <Background>
                <img src={movie?.backgroundImg} alt=""/>
            </Background>
            <ImageTitle>
                <img src={movie?.titleImg} alt=""/>
            </ImageTitle>
            <Controls>
                <EmptyButton></EmptyButton>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt=""/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt=""/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt=""/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                <EmptyButton></EmptyButton>
                {movie?.subTitle} 
            </SubTitle>
            <EmptyButton></EmptyButton>
            <Description>
            <EmptyButton></EmptyButton>
                {movie?.description}
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    paddding:0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const ImageTitle = styled.div`
    margin-top:60px;
    height:30vh;
    width:35vw;
    min-height:170px;
    min-width:200px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Controls = styled.div`
    display:flex;
    align-items:center;    
`

const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height:56px;
    background-color:rgb(249,249,249);
    border:none;
    padding:0px 24px;
    margin-right:26px;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background:rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
    background:rgb(0, 0, 0, 0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
`

const AddButton = styled.button`
    margin-right:26px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid white;
    border-radius:50%;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    span{
        font-size:30px;
        color:white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
    
`
const SubTitle = styled.div`
    font-size:15px;
    color:rgb(249,249,249);
    min-height:20px;
    margin-top:15px;
    display:flex;
    align-items:center;
    margin-right:26px;
`

const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    padding-top:16px;
    color:rgb(249,249,249);
    display:flex;
    align-items:center;
    margin-right:16px;
    max-width:960px;
    opacity:0.8;
`
const EmptyButton = styled.div`
    width:40px;
    height:15px;
`