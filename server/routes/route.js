import { Router } from 'express';
import {addUser, getUsers} from "../controller/UserContoller.js"
import {getConversation, newConversation} from '../controller/Conversation-controller.js';
import { getMessage, newMessage } from '../controller/message-Controller.js';
import { uploadFile, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';


const route = Router();

route.post('/add', addUser);  //Add a new user to the database
route.get('/users',getUsers)
route.post('/conversation/add',newConversation)
route.post('/conversation/get',getConversation)
route.post('/messages/new',newMessage)
route.get('/message/get/:id',getMessage)
route.post('/file/upload',upload.single("file"),uploadFile)
route.get('/file/:filename',getImage)

export default route