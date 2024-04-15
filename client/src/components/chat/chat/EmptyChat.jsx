import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';



const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(50%, -50%);
  transform: translate(0%,-50%);
  display:flex;
  flex-direction:column;
  align-items:center
` 

const Chatpic = styled(ChatIcon) `
  color: lightgrey;
  font-size:100px;
`
const Line = styled(Typography) `
  font-size:20px;
  font-family:inherit;
`



const EmptyChat = () => {
  return (
    <>
    <Wrapper>
    <Typography variant="h4" style={{fontFamily:'inherit',paddingBottom:'20px'}}>
        ChatterBox Web 💬
      </Typography>

      <Chatpic/>
      <Line>
        This is a chat. You can talk here! <br/>Click on a Contact to start conversation
      </Line>
    </Wrapper>
    </>
  )
}

export default EmptyChat
