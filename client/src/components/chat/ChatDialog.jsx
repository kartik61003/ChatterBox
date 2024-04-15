import { Dialog,Box} from '@mui/material'
import React, { useContext } from 'react'
import Menu from './menu/menu'
import EmptyChat from './chat/EmptyChat'
import styled from '@emotion/styled'
import ChatBox from './chat/ChatBox'
import { AccountContext } from '../../context/AccountProvider'

const dialogstyle = {
  height: '95%',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShdow: 'none',
  Backdrop: 'none',
  backgroundColor:'none',
  borderRadius:'none',
  overflow:'hidden'
}

const Component = styled(Box)`
  display: flex;
  height:100%
`
const LeftComponent = styled(Box)`
  min-width:29%;

`
const RightComponent = styled(Box)`
  width:71%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0,0,0,0.14);
`

const ChatDialog = () => {

  const {person} = useContext(AccountContext)

  return (
    <>
      <Dialog
      open={true}
      PaperProps={{ sx: dialogstyle }}
      hideBackdrop={true}
      maxWidth={'md'}>


          <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            
            <RightComponent>
                  {Object.keys(person).length !== 0 ? <ChatBox/> : <EmptyChat/> }
            </RightComponent>
          </Component>

      </Dialog>
    </>
  )
}

export default ChatDialog
