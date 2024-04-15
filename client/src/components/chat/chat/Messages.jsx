import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://imgs.search.brave.com/A0DcY7TqVQDV0amhIAWs2l1-zseFL_bJ7teiBBKD90A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NTMwMDAzNi9waG90/by9jbG9zZS11cC13/aGl0ZS1jbG90aC10/ZXh0dXJlLWJhY2tn/cm91bmQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUlnZU9K/M3MwdWZ2VkF4dm9O/MlpzQ0FKaWZfb2dV/WnRVb1NmMjk1Ymgy/UVU9"});
  background-size: 10%;
`;

const Component = styled(Box)`
  overflow-y: scroll;
  height: 79vh;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ conversation }) => {
  const { account, person, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [image,setImage] = useState('');
  const [incomingMessage,setIncomingMessage] =  useState(null)

  useEffect(() => {
    socket.current.on('getMessage', data => {
        setIncomingMessage({
            ...data,
            createdAt: Date.now()
        })
    })
}, []);

useEffect(() => {
    const getMessageDetails = async () => {
        let data = await getMessages(conversation?._id);
        setMessages(data);
    }
    getMessageDetails();
}, [conversation?._id, person._id, newMessageFlag]);


useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
        setMessages((prev) => [...prev, incomingMessage]);
    
}, [incomingMessage, conversation]);


  const sendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13 && value) {
      let message = {}
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message)

      await newMessage(message);
      setValue("");
      setFile("");
      setImage("");
      setNewMessageFlag((prev) => !prev);
    }
  };
  return (
    <>
      <Wrapper>
        <Component>
          {messages &&
            messages.map((message) => (
              <Container>
                <Message message={message} />
              </Container>
            ))}
        </Component>

        <Footer
          sendText={sendText}
          setValue={setValue}
          value={value}
          file={file}
          setFile={setFile}
          setImage={setImage}
        />
      </Wrapper>
    </>
  );
};

export default Messages;
