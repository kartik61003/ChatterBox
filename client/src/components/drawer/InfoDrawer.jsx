import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import Profile from './Profile';

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    backgroundColor: 'none',
}

const Header = styled(Box)`
    background: orange;
    display: flex;
    color: white;
    height: 15%;

    
    &>svg,&>p{
        margin-top:auto;
        padding:10px;
        font-weight: 600;
    }
    &>svg{
        cursor: pointer;
        font-size:25px;
        font-weight: 700;

    }
`

const InfoDrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Drawer
                open={open}
                onClose={() => {
                    handleClose()   }}
                PaperProps={{ sx: drawerStyle }}
                style={{ zIndex: 1500, }}
                hideBackdrop
            >

                <Header>
                    <ArrowBackIcon onClick={() => {
                        handleClose()   }}
                    />

                    <Typography>
                        Profile
                    </Typography>

                </Header>

                <Box>
                        <Profile/>
                </Box>

            </Drawer>
        </>
    )
}

export default InfoDrawer
