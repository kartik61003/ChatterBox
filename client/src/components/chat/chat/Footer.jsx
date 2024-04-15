import React, { useEffect } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Box} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';
import { uploadFile } from '../../../service/api';

const Container =  styled(Box)`
    height:55px;
    display:flex;
    width:100%;
    align-items:center;
    padding:0 15px;
    background:#ededed;

    & > *{
        margin:5px;
        color: #919191;
    }
`

const MessageBox = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: calc(94% - 100px);
`



function Footer({sendText, setValue,value, file , setFile, setImage}) {

  useEffect(() => {
    const getImage = async ()=>{
      if (file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file)
        let reposnse  = await uploadFile(data);
        setImage(reposnse.data)
      }
    }
    getImage();
  }, [file])
  

  const onFileChange  = (e)=>{
    setFile(e.target.files[0])
    setValue(e.target.files[0].name)
  }

  return (
    <>
    <Container>
        <EmojiEmotionsIcon/>
        <label htmlFor='fileicon'>
        <AttachFileIcon style={{cursor:'pointer'}}/>
        </label>

        <input
        type='file'
        style={{display:'none'}}
        id='fileicon'
        onChange={e => onFileChange(e)}
        />

        <MessageBox>
            <InputBase style={{padding:'2px 15px', width:'100%'}} placeholder='Type a message'
              onChange={ (e)=>setValue(e.target.value) }
              onKeyPress={(e)=> sendText(e)}
              value={value}
            />
        </MessageBox>
          <KeyboardVoiceIcon/>
    </Container>
    </>
  )
}

export default Footer
