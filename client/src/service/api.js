import axios from 'axios'

const url = 'http://localhost:8080'

export const addUser= async(data) =>{
    try{    
        await axios.post(`${url}/add`, data);        
    }catch(error){
        console.log('error occured',error)
    }
}

export const getUsers = async() =>{
    try{
        let response = await axios.get(`${url}/users`); 
        return response.data
    }catch(err){
        console.log("Error in getting users", err.message)
    }
}

export const setConversation =  async(data) =>{
    try{
        await  axios.post(`${url}/conversation/add`,data)
    }
    catch(err){
        console.log("Error in Setting CONVO api", err.message)
    }
}

export const getConversation =  async(data) =>{
    try{
       let response =  await axios.post(`${url}/conversation/get`,data)
        return response.data
    }
    catch(err){
        console.log("Error in Setting get convo api", err.message)
    }
}

export const newMessage = async(data) =>{
    try{
        await axios.post(`${url}/messages/new`, data)
    }catch(error){
        console.log('new message error: ', error)
    }
}

export const getMessages = async(id)=>{
    try{
        let response = await axios.get(`${url}/message/get/${id}`)
        return response.data
    }catch(error){
        console.log('get message error: ', error)
    }
}

export const uploadFile = async(data)=> {
    try{
       return await axios.post(`${url}/file/upload`, data);
    }catch(error){
        console.log('Upload FIle error', error);
    }
}