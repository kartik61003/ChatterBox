import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const  Connection = async()=>{
    try{
       await connect(`mongodb://${USERNAME}:${PASSWORD}@ac-zm0id5h-shard-00-00.4dys5o3.mongodb.net:27017,ac-zm0id5h-shard-00-01.4dys5o3.mongodb.net:27017,ac-zm0id5h-shard-00-02.4dys5o3.mongodb.net:27017/?ssl=true&replicaSet=atlas-yefycc-shard-0&authSource=admin&retryWrites=true&w=majority`,{
     });
       console.log("MongoDB Connected...");
    }catch(error){
        console.log("Error in connecting to the database", error);
    }
}

export default Connection

