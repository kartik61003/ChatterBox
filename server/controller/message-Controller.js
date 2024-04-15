import Message from "../model/Message.js"

export const newMessage = async(request, response) => {
    try{
        const newMessage = new Message(request.body)
        await newMessage.save()
        response.status(200).json("MESSAGE SENT SUCESSFULY")
    }
    catch(error){
        return  response.status(500).json(error.message)
    }
}

export const getMessage = async(request,response) => {
    try{    
        const messages = await Message.find({ conversationId: request.params.id })
        return response.status(200).json(messages)
    }catch(error){
        return  response.status(500).json(error.message)
    }
}