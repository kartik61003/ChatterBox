import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/Common_utils";

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const Conversation = ({ user }) => {
  const url = user.picture;
  const { account, newMessageFlag,setPerson }  = useContext(AccountContext);
  const [message, setMessage] = useState({});

  
  const getUser = async () => {
      setPerson(user);
      await setConversation({ senderId: account.sub, receiverId: user.sub });
  }
  
  useEffect(() => {
    const getConversationMessage = async() => {
        const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
        setMessage({ text: data?.message, timestamp: data?.updatedAt });
    }
    getConversationMessage();
}, [newMessageFlag]);

  console.log(message.text) 

  return (
    <Component onClick={() => getUser()}>
    <Box>
        <Image src={url} alt="display picture" />
    </Box>
    <Box style={{width: '100%'}}>
        <Container>
            <Typography>{user.name}</Typography>
            {  
                <Timestamp>{formatDate(message?.timestamp)}</Timestamp>        
            }
        </Container>
        <Box>
            <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
        </Box>
    </Box>
</Component>
  )
}


export default Conversation;
