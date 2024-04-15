import React from 'react'
import MoreVert from '@mui/icons-material/MoreVert';
import { Menu,MenuItem } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';


const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4A4A4A 
`

const HeaderMenu = () => {

  const[open,setOpen] = useState(false)

  const handleClose=()=>{
    setOpen(false);
  }
  const handleClick = (event) =>{
    setOpen(event.currentTarget);
  }

  return (
    <>
      <MoreVert onClick = {handleClick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        getcontentanchore1={null}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal:'center'
        }}
        transformOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuOption onClick={handleClose}>My Account</MenuOption>
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>Profile</MenuOption>

      </Menu>
    </>
  )
}

export default HeaderMenu
