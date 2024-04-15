import React from 'react'
import { Box, InputBase} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    `
const Bar = styled(Box)`
    height: 75%;
    background: rgba(0,50,100,0.09);
    margin: 5px;
    border-radius: 10px;
    display:flex;
    align-items:center;
    width:100%
`
const Icon = styled(SearchIcon)`
    color: grey;
    position: absolute;
    padding: 8px 
`

const InputField = styled(InputBase)`
    width:100%;
    padding-left:65px;

    `



const Search = ({setText}) => {
    return (
        <>
            <Component>
                <Bar>
                    <Icon/>
                    <InputField 
                        placeholder='Stat a new chat'
                        onChange={(e)=>setText(e.target.value)}
                    />
                </Bar>
            </Component>
        </>
    )
}

export default Search
