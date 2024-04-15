import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../service/api'

const ChatBox = () => {

  const {person,account}  = useContext(AccountContext)
  const [conversation, setConversation] = useState([])

  useEffect(()=>{
    const getCoversationDetails = async()=>{
     let data = await getConversation({senderId: account.sub , recieverId:person.sub})
     setConversation(data)
    }
    getCoversationDetails();
  },[person.sub]) 



  return (
    <>
        <Box style={{height:'75%'}}>
            <ChatHeader person = {person}/>
            <Messages person ={person}  conversation={conversation}  />
        </Box>
    </>
  )
}

export default ChatBox
