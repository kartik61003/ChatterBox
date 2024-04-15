import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";
import styled from "@emotion/styled";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyleDivider = styled(Divider)`
  margin: 0 0 0 70px;
`;


const Conversations = ({ text }) => {

  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers, activeUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filterData = response.filter((user) =>
        user.name?.toLowerCase().includes(text?.toLowerCase())
      );
      text ? setUsers(filterData) : setUsers(response);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", users => {
      setActiveUsers(users);
    });
    console.log(activeUsers)
  }, [account]);

  return (
    <>
      <Component>
        {users.map((user) => (
          <>
            {user.sub !== account.sub && <Conversation user={user} />}
            <StyleDivider />
          </>
        ))}
      </Component>
    </>
  );
};

export default Conversations;
