import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import Icons from './Icons';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const API = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
const Home = () => {
    const [state, setstate] = useState([]);
    const get_data = async (url) => {
        const res = await axios(url);
        // console.log(res);
        setstate(res.data);
        // console.log(state);
    }
    useEffect(() => {
        get_data(API);
    }, [])
    return (
        <>
            <Wrap>
                <h1>USER'S LIST</h1>
                <List>
                    <Contain>
                        {
                            state.map((prop) => (
                                <NavLink to={`/detail/${prop.id}`}>
                                    <Profil key={prop.id}>
                                        <img loading='lazy' src={Icons[prop.id-1].icon} alt="" />
                                        <h3>{prop.jobTitle}</h3>
                                    </Profil>
                                </NavLink>
                            ))
                        }
                    </Contain>
                </List>
            </Wrap>
        </>
    )
}

export default Home;

const Wrap = styled.div`
min-height:100vh;
background: linear-gradient(#00000080,#00000074),url(./images/banner.jpeg);background-size: cover;
background-position: center;
h1{
    font-size: 5rem;
    -webkit-text-stroke: 1px white;
    text-align: center;
    color: transparent;
    background: url(./images/back.png);
    -webkit-background-clip: text;
    background-position: 0 0;
    background-size: cover;
    animation: flow 20s linear infinite;
}
@media (max-width:825px){
h1{
    font-size: 55px;
}
}
@media (max-width:530px){
h1{
    font-size: 45px;
}
}
`

const List = styled.div`
width: 60%;
padding-bottom: 20px;
margin: 0 auto;
@media (max-width:825px){
    width:100%;
    }
`
const Contain = styled.div`
width:85%;
margin:20px auto;
background:#000000ab;
border-radius:15px;
padding:40px 0;
h2{
    font-size:2.5rem;
    font-family: 'Rubik', sans-serif;
    margin-bottom:15px;
    text-align:center;
}
@media (max-width:530px){
    width:95%;
   
`
const Profil = styled.div`
display:flex;
gap:3rem;
border:1px solid #197170;
border-radius:5px;
align-items:center;
padding:6px;
width:80%;
margin:10px auto;
color:white;
cursor:pointer;
img{
    width: 9%;;
    border-radius: 50%;
}
h3{
    font-family: 'Audiowide', cursive;
    text-transform: uppercase;
    font-weight:500;
    font-size:14px;
}
@media (max-width:530px){
    gap:20px;
    width:90%;
    h3{
        font-size: 12px;
    }
    }
`