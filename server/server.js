import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js';
import route from './routes/route.js';


const app = express()
//middleware
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))  //to parse the incoming requests with JSON payloads
app.use('/',route)
Connection();

const PORT = process.env.PORT || 8080 ;
  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
  })

