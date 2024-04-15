// Importing React and necessary hooks from 'react'
import React, { useEffect } from 'react'
import { createContext, useState,useRef} from "react";
import {io} from "socket.io-client"
// Creating AccountContext using createContext from react
export const AccountContext = createContext(null);

// Creating a provider component for the AccountContext
const AccountProvider = ({ children }) => {

  // Using the useState hook to create state variables 'account' and 'setAccount'
  const [account, setAccount] = useState();
  const [person,setPerson] = useState({})
  const  socket = useRef()
  const [activeUsers,setActiveUsers] = useState([])
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  useEffect(()=>{
    socket.current = io('ws://localhost:9000')
  },[])



  // Returning a JSX element that wraps the children with the AccountContext.Provider
  // The value prop of the Provider is set to an object containing 'account' and 'setAccount'
  return (
    <>
      <AccountContext.Provider value={{
        account, // The current value of the 'account' state variable
        setAccount,
        person,
        setPerson,
        socket,
        setActiveUsers, 
        activeUsers,
        setNewMessageFlag,
        newMessageFlag
         // A function to update the 'account' state variable
      }}>
        {children}
      </AccountContext.Provider>
    </>
  )
}

// Exporting the AccountProvider component for use in other parts of the application
export default AccountProvider;