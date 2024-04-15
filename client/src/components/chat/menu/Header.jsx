import React, { useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import Messageicon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu'
import InfoDrawer from '../../drawer/InfoDrawer'


const Component = styled(Box)`
  height:44px;
  background: lightgrey;
  padding: 8px 16px;
  display:flex;
  align-items:center;
  `
  const Wrapper =  styled(Box)`
  margin-left:auto;
  & > *{
    margin-left:2px;
    padding: 8px;
    color: #000;
  }
  & : first-child{
    font-size:22px;
    margin-right:2px;
    margin-top: 4px;
  }
  `
  const Image = styled.img({
    height: 45,
    width: 45,
    marginRight: '5px',
    borderRadius: '50%'
  })

const Header = () => {

  const { account } = useContext(AccountContext)  
  const[openDrawer,setOpenDrawer] = useState(false)

  const toggleDrawer = ()=>{
      setOpenDrawer(true)
  }

  return (
    <>
      <Component>
        <Image src={account.picture} alt='dp' onClick={()=>{toggleDrawer()}}></Image>
        <Wrapper>
          <Messageicon/>
          <HeaderMenu/>
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}
export default Header
