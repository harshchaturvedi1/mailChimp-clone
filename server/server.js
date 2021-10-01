const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path:`../config.env`});
require('./db/connect');
app.use(express.json());
app.use(cors());
app.use("/",require('./router/auth'));

const PORT = process.env.SERVER_PORT;


const middleware = (req, res, next)=>{
    console.log("Hi");
}



app.listen(PORT,()=>{
    console.log("123");
})