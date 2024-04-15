import Conversation from "../model/Conversation.js";

export const newConversation = async(request,response)=>{
    try{    
        const senderId =  request.body.senderId;
        const recieverId =  request.body.recieverId;

        const exist  = await Conversation.findOne({members:{$all : [recieverId,senderId]}});

        if(exist){
            return  response.status(200).json({ msg: 'Conversation already exist' });
        }

        const newConversation = new Conversation({
            members: [senderId, recieverId]
        })
        await newConversation.save()
        return response.status(201).json('new conversation saved successfully')


    }catch(error){
        return response.json(error)
    }
}


export const getConversation = async (request , response)=> {
    try{
        const senderId =  request.body.senderId;
        const recieverId =  request.body.recieverId;
        let conversation = await Conversation.findOne( {members: {$all: [recieverId , senderId ] } })
        return response.status(200).json(conversation)
    }catch(error){
        return  response.status(500).json(error.message)
    }
}

