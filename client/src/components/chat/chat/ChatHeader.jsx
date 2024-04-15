import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { Box, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display:flex;
    align-item:center;
    gap:10px;

`
const Wrapper = styled(Box)`
    margin-left:auto;
    cursor: pointer;
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

const Image = styled('img')({
    height: 50,
    width: 50,
    obejectFit: 'cover',
    borderRadius: '50%',
})

const ChatHeader = ({person}) => {

    const {activeUsers} = useContext(AccountContext)
    return (
        <>
            <Header>
                <Image src={person.picture} alt='dp'></Image>
                <Box>
                    <Typography>{person.name}</Typography>
                    <Typography>
                    {
                        activeUsers?.find(user => user.sub === person.sub) ?  "Online" : 'Offline'
                    }
                    </Typography>
                </Box>
                <Wrapper>
                    <SearchIcon />
                    <MoreVertIcon />
                </Wrapper>
            </Header>
        </>
    )
}

export default ChatHeader
