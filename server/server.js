const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path:`../.env`});
require('./db/connect');
app.use(express.json());
app.use(cors());
app.use("/",require('./router/auth'));

const PORT = process.env.SERVER_PORT;

app.listen(PORT,()=>{
    console.log("123");
})