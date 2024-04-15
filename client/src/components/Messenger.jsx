import React from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'
import LoginDialog from './account/LoginDialog'
import styled from '@emotion/styled'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import ChatDialog from './chat/ChatDialog'

const Header = styled(AppBar)`
    height: 35%;
    background-color: Peru;
    box-shadow: none;
    `
const LoginHeader = styled(AppBar)`
    height: 25%;
    background-color: Peru;
    box-shadow: none;
    `
const Components = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
`


const Messenger = () => {

  const { account } = useContext(AccountContext)

  return (
    <Components> {

      account ?
        <>
          <LoginHeader>
            <Toolbar>

            </Toolbar>
          </LoginHeader>
          <ChatDialog />
        </>
        :
        <>
          <Header>
            <Toolbar>

            </Toolbar>
          </Header>
          <LoginDialog />
        </>
    }
    </Components>

  )
}

export default Messenger
