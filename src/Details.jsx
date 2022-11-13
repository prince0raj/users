import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Icons from './Icons';
import { useParams } from 'react-router-dom';
const API = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

const Details_data = () => {
    const { id } = useParams();
    const [val, setval] = useState({});
    const [prof, setprof] = useState({});
    const get_data = async (url) => {
        const rec = await axios.get(url);
        // console.log(rec);
        // console.log(rec.data);
        console.log(rec.data[0]);
        // console.log(rec.data[0].Bio);
        setval(rec.data[0]);
        setprof(rec.data[0].profile);
        // console.log(val);
    }
    useEffect(() => {
        get_data(`${API}?id=${id}`);
    }, [])

    return (
        <Wrap>
            <h1>USER DETAIL</h1>
            <Contain>
                <Box>
                    <Img>
                        <img loading='lazy' src={Icons[id - 1].icon} alt="logo" />
                        <p>@{prof.username}</p>
                    </Img>
                    <Card>
                        <Desc>
                            <p>{val.Bio}</p>
                        </Desc>
                        <Text>
                            <span>Full Name</span>
                            <p>{`${prof.firstName} ${prof.lastName}`}</p>
                        </Text>
                        <Text>
                            <span>Job Tittle</span>
                            <p>{`${val.jobTitle}`}</p>
                        </Text>
                        <Text>
                            <span>Email</span>
                            <p>{`${prof.email}`}</p>
                        </Text>
                    </Card>
                    <Button>
                        <Link to='/'>
                            go back
                        </Link>
                    </Button>
                </Box>
            </Contain>
        </Wrap>
    )
}

export default Details_data;
const Contain = styled.div`
width: 55%;
margin: 0 auto;
@media (max-width:912px){
    width:70%;
 }
@media (max-width:623px){
    width:95%;
 }
@media (max-width:492px){
    width:100%;
 }

`
const Button = styled.div`
border:1px solid #1e6869;
padding:8px 40px;
border-radius:20px;
margin-top:20px;
display: flex;
align-items: center;
a{
    font-size:14px;
    color:white;
}
@media (max-width:492px){
    a{
        font-size:12px;
    }
 }
`
const Wrap = styled.div`
min-height:100vh;
padding-bottom:20px;
background: linear-gradient(#00000080,#00000074),url('/images/banner.jpeg');background-size: cover;
background-position: center;
h1{
    font-size: 5rem;
    -webkit-text-stroke: 1px white;
    color: transparent;
    text-align: center;
    background: url(/images/back.png);
    -webkit-background-clip: text;
    background-position: 0 0;
    background-size: cover;
    animation: flow 20s linear infinite;
}
@media (max-width:912px){
    h1{
        font-size:55px;
    }
}
@media (max-width:492px){
     h1{
         font-size:40px;
     }
 }
`
const Box = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background:#000000bd;
width:80%;
padding:40px;
border-radius:10px;
margin:10px auto;
`
const Card = styled.div`
`
const Text = styled.div`
text-align:start;
p{
    font-size:14px;
    border:1px solid #1e6869;
    border-radius:5px;
    padding:6px 20px;
    margin:5px 0;
    font-family: 'Rubik', sans-serif;
    font-weight:300;
}
span{
    color:#52b8ba;
    font-size:14px;
}
margin:5px 0;
@media (max-width:492px){
    p{
      font-size:13px;
    }
 }
`
const Desc = styled.div`
border:1px solid #1e6869;
padding:8px 15px;
border-radius:5px;
margin:20px 0;
p{
    font-size:14px;
}
@media (max-width:492px){
    p{
        font-size:12px;
    }
 }
`
const Img = styled.div`
text-align:center;
img{
    width: 31%;
    border-radius: 50%;
}
p{
    font-size:18px;
    font-family: 'Rubik', sans-serif;
}
`