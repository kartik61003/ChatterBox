import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { formatDate } from "../../../utils/Common_utils";
import { AccountContext } from "../../../context/AccountProvider";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Own = styled(Box)`
  background: rgb(215 174 83);
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  margin-right: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0px 25px 0px 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;

const PdfMessage = styled(Box)`
    display:flex;
    flex-frection: column;
    gap:50px
`

export const Message = ({ message }) => {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
         {message.type === 'file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>}
        </Own>
      ) : (
        <Wrapper>
        {message.type === 'file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>}
        </Wrapper>
      )}
    </>
  );
};

const ImageMessage = ({message} )=>{
    return(
        <>
        <Box>    
        <a href={message.text} target="blank" >
             {
                message?.text?.includes('.pdf')  || message?.fileName?.endsWith('.pdf')?
                <PdfMessage>
                    <PictureAsPdfIcon/> <Typography>{message.text}</Typography>
                </PdfMessage> 
                :
                <img style={{width:'300px',height:'100%',objectFit:'cover'}}src={message.text} alt={message.text}></img>
             }
            </a>
        </Box>
        </>
    )
}

const TextMessage = ({message})=>{
    return(
        <>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

export default Message;
