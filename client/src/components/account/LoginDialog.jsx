import styled from '@emotion/styled'
import { Box, Button, Dialog, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';


const Components = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Container = styled(Box)`
    padding: 55px 0px 55px 0px;    
`
const Title = styled(Typography)`
    font-size: 25px;
    padding: 10px 10px 10px 10px;
    font-weight: 600;
    font-family: inherit;
`
const dialogstyle = {
    height: '95%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShdow: 'none',
    overflow: 'none',
    Backdrop: 'none'
}



const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext)


    const onLoginSuccuss = async(res) => {
        const decoded = jwtDecode(res.credential)
        setAccount(decoded);
        await addUser(decoded);
    }
    const onFailedLogin = (res) => {
        console.log("try again.... failed")
    }

    return (
        <>

            <Dialog
                open={true}
                PaperProps={{ sx: dialogstyle }}
                hideBackdrop={true}>

                <Components>
                    <Container>
                        <Title>Welcome to ChatterBox</Title>
                        <List>
                            <ListItem>1. Safe and Secure</ListItem>
                            <ListItem>2. Made using Socket IO</ListItem>
                            <ListItem>3. Sign With GOOGLE account</ListItem>
                        </List>
                    </Container>
                    <Container>
                        <Button size="large">
                            <GoogleLogin
                                onSuccess={onLoginSuccuss}
                                onError={onFailedLogin}
                            />
                        </Button>
                    </Container>
                </Components>

            </Dialog>
        </>
    )
}

export default LoginDialog
