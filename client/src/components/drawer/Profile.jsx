import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;    
`
const ImageBox = styled(Box)`
    margin: 20px 0px 20px 0px;
`
const Image =styled.img`
    width: 175px;
    height:175px;
    border-radius: 100px;
`
const NameBox = styled(Box)`
    padding: 10px;
    width: 100%;
    height: 80px;
    background-color: lightgrey;
    color: #d8951a;
    font-weight: 800;
    margin:15px
`
const TitleTypo = styled(Typography)`
    margin-left: 30px;
    font-size:15px
`
const Typography2 =styled(Typography)`
    color: black;
    margin-left:30px;
    margin-top:5px;
    font-size:25px;
    font-weight:500;

`

const Profile = () => {

    const {account} = useContext(AccountContext)

  return (
    <>
    <Container>

        <ImageBox>
            <Image src={account.picture}></Image>
        </ImageBox>

        <NameBox><TitleTypo>Your Name</TitleTypo>
                <Typography2>{account.name}</Typography2>
        </NameBox>

        <NameBox><TitleTypo>About</TitleTypo>
        <Typography2>{account.email}</Typography2></NameBox>
    </Container>
    </>
  )
}

export default Profile
